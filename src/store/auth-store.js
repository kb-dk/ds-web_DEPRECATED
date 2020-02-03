import Vue from 'vue'
import VueAxios from 'vue-axios'
import { VueAuthenticate } from 'vue-authenticate'
import axios from 'axios'

// import axios from 'axios'

Vue.use(VueAxios, axios)

const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  tokenName: 'access_token',
  baseUrl: 'http://localhost:3000', // API domain
  storageType: 'cookieStorage',
  providers: {
    kb: {
      clientId: '',
      redirectUri: 'http://localhost:8081/auth/callback' // Your client app URL
    }
  }
})

const state = {
  isAuthenticated: false
}

const getters = {
  isAuthenticated () {
    return vueAuth.isAuthenticated()
  }
}

const actions = {
  // Perform VueAuthenticate login using Vuex actions
  login (context, payload) {
    console.log(payload)
    vueAuth.login(payload.email, payload.password).then((response) => {
      context.commit('isAuthenticated', {
        isAuthenticated: vueAuth.isAuthenticated()
      })
    })
  }
}

const mutations = {
  isAuthenticated (state, payload) {
    state.isAuthenticated = payload.isAuthenticated
  }
}

export const auth = {
  state,
  getters,
  actions,
  mutations
}
