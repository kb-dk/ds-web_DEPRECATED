import { app } from '../main'
import axios from 'axios'

export const state = {
  lang: 'da'
}

const mutations = {
  'setLanguage' (state, params) {
    app.$i18n.locale = params
  }
}
const actions = {
  async setLang ({ commit }, params) {
    if (params in app.$i18n.messages) {
      commit('setLanguage', params)
    } else {
      try {
        const res = await axios.get(`/locale/${params}.json`)
        app.$i18n.setLocaleMessage(params, res.data)
        commit('setLanguage', params)
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
