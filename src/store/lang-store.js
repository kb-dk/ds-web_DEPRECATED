import { app } from '../main'
// import axios from 'axios'

export const SET_LANG = 'SET_LANG'

export const state = {
  lang: 'da'
}

const mutations = {
  [SET_LANG] (state, payload) {
    app.$i18n.locale = payload
  }
}
const actions = {
  /* setLang ({ commit }, payload) {
    commit(SET_LANG, payload)
  }, */
  async setLang ({ commit }, payload) {
    if (payload in app.$i18n.messages) {
      commit(SET_LANG, payload)
    } else {
      try {
        // const res = await axios.get(`@/lang/locale/${payload}.json`)
        // const res = await axios.get(`../../src/lang/${payload}.json`)
        const res = await import(`@/lang/locale/${payload}.json`)
        app.$i18n.setLocaleMessage(payload, res.data)
        commit(SET_LANG, payload)
      } catch (e) {
        console.log(e)
      }
    }
  }
}

export const lang = {
  namespaced: true,
  state,
  actions,
  mutations
}
