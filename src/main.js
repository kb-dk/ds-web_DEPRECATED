import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

import i18n from './i18n-setup.js'
import App from './App.vue'

import router from './router/router'
import { search } from './store/search-store'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(BootstrapVue)

export const store = new Vuex.Store({
  modules: {
    alert,
    search
  },
  strict: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
