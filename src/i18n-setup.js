import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vue2Filters from 'vue2-filters'
import messages from '@/lang/da'
import axios from 'axios'

Vue.use(VueI18n)
Vue.use(Vue2Filters)

const i18n = new VueI18n({
  locale: 'da', // set locale
  fallbackLocale: 'da',
  mixins: [Vue2Filters.mixin],
  messages // set locale messages
})

export default i18n

const loadedLanguages = ['da'] // our default language that is preloaded

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language hasn't been loaded yet
  return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.json`).then(
    messages => {
      i18n.setLocaleMessage(lang, messages.default)
      loadedLanguages.push(lang)
      return setI18nLanguage(lang)
    }
  )
}
