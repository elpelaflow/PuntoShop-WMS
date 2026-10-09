// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// Translations provided by Vuetify
import { zhHans, zhHant, en, es } from 'vuetify/locale'
import { getSelcectedLangForVuetify } from './method/index'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import { primaryColor, errorColor } from '@/constant/style'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          primary: primaryColor,
          secondary: '#C9A7CF',
          error: errorColor,
          info: '#16B1FF',
          success: '#56CA00',
          warning: '#FFB400',
          background: '#F4F5FA',
          surface: '#FFFFFF'
        }
      }
    }
  },
  locale: {
    locale: getStorageLang(),
    messages: { zhHans, zhHant, en, es }
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

// get language in storage or default
function getStorageLang() {
  const lang = localStorage.getItem('language')
  if (lang) {
    return getSelcectedLangForVuetify(lang)
  }
  return 'en'
}

export { vuetify }
