import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import router from './router/router'
import { search } from './store/search-store'
import './styles/main.scss'

Vue.use(Vuex)

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
  render: h => h(App)
}).$mount('#app')
