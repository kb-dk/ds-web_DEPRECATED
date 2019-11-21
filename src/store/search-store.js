import { searchService } from '../services/search-service'

const state = {
  all: {}
}

const actions = {
  doSearch ({ commit }, params) {
    commit('doSearchSuccess')
    searchService
      .search(params)
      .then(searchResult => commit('doSearchSuccess', searchResult), error =>
        commit('doSearchError', error))
  },
  doImageLookup ({ commit }, params) {
    commit('doImageLookupSuccess')
    searchService
      .lookup(params)
      .then(imageResult => commit('doImageLookupSuccess', imageResult), error =>
        commit('doImageLookupError', error))
  }
}

const mutations = {
  doSearchSuccess (state, searchResult) {
    state.all = { searchResult }
  },
  doSearchError (state, error) {
    state.all = { error }
  },
  doImageLookupSuccess (state, imageResult) {
    state.all = { imageResult }
  },
  doImageLookupError (state, error) {
    state.all = { error }
  }
}

export const search = {
  namespaced: true,
  state,
  actions,
  mutations
}
