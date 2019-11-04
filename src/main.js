import Vue from 'vue'
import App from './App.vue'
import i18n from './lang'
import store from './store'
import router from './router/router'
import './styles/main.scss'
import '../public/assets/css/style.css'

Vue.config.productionTip = false

export const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
