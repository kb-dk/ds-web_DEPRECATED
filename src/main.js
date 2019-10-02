import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import Translations from '../i18n/translations.json'

import App from './App.vue'
import router from './router/router'
import { search } from './store/search-store'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueI18n)

export const store = new Vuex.Store({
  modules: {
    alert,
    search
  },
  strict: true
})

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'da',
  messages: Translations
})

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('uppercase', function (value) {
  if (!value) return ''
  return value.toString().toUpperCase()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
