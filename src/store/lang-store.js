import { app } from '../main'
import { languageService } from '../services/language-service'

export const state = {
  lang: 'da'
}

const mutations = {
  setLanguageSuccess (state, params) {
    app.$i18n.locale = params
    // app.$i18n.setLocaleMessage(params, res.data)
  },
  setLanguageError (state, error) {
    state.all = { error }
  }
}
const actions = {
  setLanguage ({ commit }, params) {
    if (params in app.$i18n.messages) {
      commit('setLanguageSuccess', params)
    } else {
      languageService
        .setLanguage(params)
        .then(languageResult => commit('setLanguageSuccess', languageResult), error =>
          commit('setLanguageError', error))
    }
  }
}

export const lang = {
  namespaced: true,
  state,
  actions,
  mutations
}
