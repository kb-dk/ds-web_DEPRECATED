import Vue from 'vue'
import VueAxios from 'vue-axios'
import { VueAuthenticate } from 'vue-authenticate'
import axios from 'axios'

// import axios from 'axios'

Vue.use(VueAxios, axios)

const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  tokenName: 'access_token',
  baseUrl: '/', // API domain
  storageType: 'cookieStorage',
  providers: {
    kb: {
      clientId: 'digisam',
      defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
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
    vueAuth.login({ email: payload.email, password: payload.password }).then((response) => {
      context.commit('isAuthenticated', {
        isAuthenticated: vueAuth.isAuthenticated()
      })
    })
  },
  register (context, payload) {
    console.log(payload)
    vueAuth.register({ email: payload.email, password: payload.password }).then((response) => {
      console.log('registered')
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
