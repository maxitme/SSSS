
import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getSqlClient } from "@root/src/db";
import bcrypt from "bcryptjs";
import { env } from "process";
import { PROVIDER_TYPE } from "@common/constant";
import { v4 as uuidv4 } from 'uuid';
const prisma = getSqlClient()
// import Apple from "next-auth/providers/apple"
// import Atlassian from "next-auth/providers/atlassian"
// import Auth0 from "next-auth/providers/auth0"
// import Authentik from "next-auth/providers/authentik"
// import AzureAD from "next-auth/providers/azure-ad"
// import AzureB2C from "next-auth/providers/azure-ad-b2c"
// import Battlenet from "next-auth/providers/battlenet"
// import Box from "next-auth/providers/box"
// import BoxyHQSAML from "next-auth/providers/boxyhq-saml"
// import Bungie from "next-auth/providers/bungie"
// import Cognito from "next-auth/providers/cognito"
// import Coinbase from "next-auth/providers/coinbase"
// import Discord from "next-auth/providers/discord"
// import Dropbox from "next-auth/providers/dropbox"
// import DuendeIDS6 from "next-auth/providers/duende-identity-server6"
// import Eveonline from "next-auth/providers/eveonline"
// import Facebook from "next-auth/providers/facebook"
// import Faceit from "next-auth/providers/faceit"
// import FortyTwoSchool from "next-auth/providers/42-school"
// import Foursquare from "next-auth/providers/foursquare"
// import Freshbooks from "next-auth/providers/freshbooks"
// import Fusionauth from "next-auth/providers/fusionauth"
//import GitHub from "next-auth/providers/github"
// import Gitlab from "next-auth/providers/gitlab"
// import Google from "next-auth/providers/google"
// import Hubspot from "next-auth/providers/hubspot"
// import Instagram from "next-auth/providers/instagram"
// import Kakao from "next-auth/providers/kakao"
// import Keycloak from "next-auth/providers/keycloak"
// import Line from "next-auth/providers/line"
// import LinkedIn from "next-auth/providers/linkedin"
// import Mailchimp from "next-auth/providers/mailchimp"
// import Mailru from "next-auth/providers/mailru"
// import Medium from "next-auth/providers/medium"
// import Naver from "next-auth/providers/naver"
// import Netlify from "next-auth/providers/netlify"
// import Okta from "next-auth/providers/okta"
// import Onelogin from "next-auth/providers/onelogin"
// import Osso from "next-auth/providers/osso"
// import Osu from "next-auth/providers/osu"
// import Passage from "next-auth/providers/passage"
// import Patreon from "next-auth/providers/patreon"
// import Pinterest from "next-auth/providers/pinterest"
// import Pipedrive from "next-auth/providers/pipedrive"
// import Reddit from "next-auth/providers/reddit"
// import Salesforce from "next-auth/providers/salesforce"
// import Slack from "next-auth/providers/slack"
// import Spotify from "next-auth/providers/spotify"
// import Strava from "next-auth/providers/strava"
// import Todoist from "next-auth/providers/todoist"
// import Trakt from "next-auth/providers/trakt"
// import Twitch from "next-auth/providers/twitch"
// import Twitter from "next-auth/providers/twitter"
// import UnitedEffects from "next-auth/providers/united-effects"
// import Vk from "next-auth/providers/vk"
// import Wikimedia from "next-auth/providers/wikimedia"
// import Wordpress from "next-auth/providers/wordpress"
// import WorkOS from "next-auth/providers/workos"
// import Yandex from "next-auth/providers/yandex"
// import Zitadel from "next-auth/providers/zitadel"
// import Zoho from "next-auth/providers/zoho"
// import Zoom from "next-auth/providers/zoom"
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn(params) {
      return true;
    },
    async session({ session, token }) {
      if (session.user?.name) session.user.name = token.name;
      if (session.user?.email) session.user.email = token.email;
      return session;
    },
    async jwt({ token, user }) {
      // * User only available on first run.
      let newUser = { ...user } as any;
      if (newUser)
        token.email = `${newUser.email}`;
      return token;
    },
  },
  providers: [
    // GoogleProvider({
    //   clientId: env.GOOGLE_CLIENT_ID,
    //   clientSecret: config.GOOGLE_CLIENT_SECRET,
    // }),
    // GithubProvider({
    //   clientId: config.GITHUB_CLIENT_ID,
    //   clientSecret: config.GITHUB_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: PROVIDER_TYPE.Credentials,
      credentials: {
        provider: { label: "provider", type: "text" },
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, token: any): Promise<any> {
        // Find user within the database
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (user) {
          const account = await prisma.account.findFirst({
            where: {
              userId: user.id // Assuming user.id is the ID of the user
            }
          });

          if (account?.providerType) {
            if (account.providerType.toLocaleLowerCase() !== PROVIDER_TYPE.Credentials.toLocaleLowerCase()) {
              throw new Error(`Please sign in with ${account.providerType}`);
            }
          } else {
            throw new Error(`No account found`);
          }

          const matchingPassword =
            user.password &&
            credentials?.password &&
            (await bcrypt.compare(credentials.password, user.password));

          if (!matchingPassword) {
            throw new Error("Incorrect Username or Password");
          }
          return user;
        }

        throw new Error("User does not exist");
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 1 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return uuidv4()
    }
  }
} as any;
export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)