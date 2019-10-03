import Vue from 'vue'
import Vuex from 'vuex'
import { search } from './search-store'
import { lang } from './lang-store'

// import { state, mutations, actions } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alert,
    search,
    lang
  },
  strict: true
})
