import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import i18n from './lang'
import './styles/main.scss'
import './assets/css/style.css'
// Import the Auth0 configuration
import { domain, clientId } from '../auth_config.json'
import { Auth0Plugin } from './auth'

Vue.config.productionTip = false

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

export const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
