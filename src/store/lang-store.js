import { app } from '../main'
import { languageService } from '../services/language-service'

export const state = {
  lang: 'da'
}

const mutations = {
  setLanguageSuccess (state, resp) {
    if (resp.langData === null) {
      app.$i18n.locale = resp.lang
    } else {
      app.$i18n.setLocaleMessage(resp.lang, resp.langData)
      app.$i18n.locale = resp.lang
    }
  },
  setLanguageError (state, error) {
    state.all = { error }
  }
}
const actions = {
  setLanguage ({ commit }, newLang) {
    if (!(newLang in app.$i18n.messages)) {
      languageService
        .setLanguage(newLang)
        .then(languageResult => commit('setLanguageSuccess', { langData: languageResult, lang: newLang }), error =>
          commit('setLanguageError', error))
    } else {
      commit('setLanguageSuccess', { langData: null, lang: newLang })
    }
  }
}

export const lang = {
  namespaced: true,
  state,
  actions,
  mutations
}
