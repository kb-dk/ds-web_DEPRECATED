import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router/router'
import { search } from './store/search-store'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons/search'
import Icon from 'vue-awesome/components/Icon'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.component('icon', Icon)

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
