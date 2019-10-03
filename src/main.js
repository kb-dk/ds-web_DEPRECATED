import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import i18n from './lang/lang'
import store from './store'
import router from './router/router'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

export const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

// DEBUG:
window['vue'] = app
window.store = store
