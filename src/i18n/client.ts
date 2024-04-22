'use client'
import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions } from './settings';
import { setCookie, getCookie, cookieLangName } from '@src/cookie';


// Initialize i18next instance on the client side
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language, namespace) =>
      import(`./locales/${language}/${namespace}.json`).then((module) => module.default)
    )
  )
  .init({
    ...getOptions(),
    lng: detectLanguageOnClientSide(), // Use a function to get language on the client side
    detection: {
      order: ['querystring', 'cookie', 'htmlTag', 'navigator'],
      caches: ['cookie'],
    },
  });

function detectLanguageOnClientSide() {
  const langCookie = getCookie(cookieLangName);
  if (!langCookie) {
    const defaultLang = 'vn';
    setCookie(cookieLangName, defaultLang, { expires: 365 });
  }
  return langCookie; // Default language for server-side rendering
}

export function init() {
  detectLanguageOnClientSide()
}

export async function changeLanguage(ns): Promise<any> {
  await i18next.changeLanguage(ns);
  const storedLang = detectLanguageOnClientSide();
  if (storedLang !== ns) {
    setCookie(cookieLangName, ns, { expires: 365 });
    // window.location.reload();
  }

}

export const useTranslation = useTranslationOrg;