import { searchService } from '../_services/search-service'

const state = {
  all: {},
  loading: false
}

const actions = {
  doSearch ({ commit }, params) {
    commit('doSearchSuccess')
    searchService
      .search(params)
      .then(users => commit('doSearchSuccess', users), error =>
        commit('doSearchError', error))
  }
}

const mutations = {
  doSearchSuccess (state, data) {
    state.all = { data }
    state.loading = !data
  },
  doSearchError (state, error) {
    state.all = { error }
    state.loading = false
  }
}

export const search = {
  namespaced: true,
  state,
  actions,
  mutations
}
