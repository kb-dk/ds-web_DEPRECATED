import { searchService } from '../services/search-service'

const state = {
  all: {}
}

const actions = {
  async doSearch ({ commit }, params) {
    commit('doSearchSuccess')
    searchService
      .search(params)
      .then(searchResult => commit('doSearchSuccess', searchResult), error =>
        commit('doSearchError', error))
  }
}

const mutations = {
  doSearchSuccess (state, searchResult) {
    state.all = { searchResult }
  },
  doSearchError (state, error) {
    state.all = { error }
  }
}

export const search = {
  namespaced: true,
  state,
  actions,
  mutations
}
