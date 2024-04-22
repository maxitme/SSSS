//@ts-nocheck
import { fallbackLng, languages } from '@root/src/i18n/settings';
import acceptLanguage from 'accept-language';
import { NextResponse } from 'next/server';

import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"


acceptLanguage.languages(languages)
export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

const cookieName = 'i18next'
const searchParamName = 'lng'

export default withAuth(
  async function middleware(req) {


    if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) {
      return NextResponse.next();
    }
    let lngInSearchParams, lngInCookie, lngInAcceptHeader;

    if (req.nextUrl.searchParams.has(searchParamName)) {
      lngInSearchParams = acceptLanguage.get(req.nextUrl.searchParams.get(searchParamName));
    }

    if (req.cookies.has(cookieName)) {
      lngInCookie = acceptLanguage.get(req.cookies.get(cookieName).value);
    }

    lngInAcceptHeader = acceptLanguage.get(req.headers.get('Accept-Language'));
    const lng = lngInSearchParams || lngInCookie || lngInAcceptHeader || fallbackLng;
    // Check if the URL starts with "/admin/"
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
    const isNoAuthRoute = req.nextUrl.pathname.startsWith('/login');
    let response = await NextResponse.next();

    if (lngInCookie !== lng) {
      response.cookies.set(cookieName, lng);
    }
    const user = await getToken({ req })
    if (isAdminRoute) {
      if (!user) {
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url);
      }
    }
    if (isNoAuthRoute) {
      if (user) {
        const url = req.nextUrl.clone()
        url.pathname = '/'
        return NextResponse.redirect(url);
      }
    }
    return response;
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      },
    },
  }
)


