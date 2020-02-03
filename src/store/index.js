import Vue from 'vue'
import Vuex from 'vuex'
import { search } from './search-store'
import { lang } from './lang-store'
import { auth } from './auth-store'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    alert,
    search,
    lang,
    auth
  },
  strict: debug
})
