
import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions, fallbackLng } from './settings'
import { cookies, headers } from 'next/headers'
import { cookieLangName } from '@src/cookie'
import { getProviders } from "next-auth/react"
const initI18next = async (lng, ns) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance()
  const providers = await getProviders()
  console.log("Providers", providers)
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

export function detectLanguage() {
  const ckies = cookies()
  const hders = headers()
  let lng
  const nextUrlHeader = hders.has('next-url') && hders.get('next-url')
  if (nextUrlHeader && nextUrlHeader.indexOf(`"lng":"`) > -1) {
    const qsObj = JSON.parse(nextUrlHeader.substring(nextUrlHeader.indexOf('{'), nextUrlHeader.indexOf(`}`) + 1))
    lng = qsObj.lng
  }
  if (!lng && ckies.has(cookieLangName)) {
    lng = ckies?.get(cookieLangName)?.value
  }
  if (!lng) lng = fallbackLng
  return lng
}

export async function useTranslation(ns, options: any = {}): Promise<any> {
  const lng = detectLanguage()
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18nextInstance
  }
}
