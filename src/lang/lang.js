import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vue2Filters from 'vue2-filters'
import da from './locale/da.json'

Vue.use(VueI18n)
Vue.use(Vue2Filters)

const locale = 'da'

const messages = {
  da
}

const i18n = new VueI18n({
  locale,
  mixins: [Vue2Filters.mixin],
  messages // set locale messages
})

export default i18n

/* function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}
*/
