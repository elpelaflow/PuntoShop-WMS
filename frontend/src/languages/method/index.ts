// Get different languages according to the key
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
import enUS from 'vxe-table/lib/locale/lang/en-US'
import zhTW from 'vxe-table/lib/locale/lang/zh-TW'
import { store } from '@/store'
import i18n from '../i18n'

import en from '../langsJson/en.json'
import cn from '../langsJson/cn.json'
import tw from '../langsJson/tw.json'
import es from '../langsJson/es.json'

export function getSelectedLang(lang: string) {
  switch (lang) {
    case 'zh':
      return 'zh_CN'
    case 'en':
      return 'en_US'
    case 'tw':
      return 'zh_TW'
    case 'es':
      return 'es_ES'
    default:
      return 'en_US'
  }
}

// Obtain default language pack based on language
export function getLangPackage(lang?: string) {
  const result: Record<string, any> = {
    zh_CN: { ...cn, ...zhCN },
    zh_TW: { ...tw, ...zhTW },
    en_US: { ...en, ...enUS },
    es_ES: { ...enUS, ...es }
  }
  return result
}

// Because it is lazy to load the language pack, the user will reload the language pack after switching languages
export function installNewLang() {
  let lang = store.getters['system/language']
  lang = getSelectedLang(lang)
  const messages = getLangPackage(lang)
  if (lang && messages && messages[lang]) {
    // Use setLocaleMessage to add or update language packs
    i18n.global.setLocaleMessage(lang, messages[lang])
    return
  }
  // Default English
  i18n.global.setLocaleMessage('en_US', { ...en, ...enUS })
}
