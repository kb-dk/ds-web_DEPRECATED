import axios from 'axios'

export const searchService = {
  search, lookup
}

async function search (params) {
  const url = '/search-api/search/solr/ds/select?q=' + params
  const token = await this.$auth.getTokenSilently()

  return axios.get(url, {
    headers: {
      // send the access token through the 'Authorization' header
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.data
  }).catch(error => {
    return Promise.reject(error)
  })
}

function lookup (params) {
  const url = '/search-api/search/solr/ds/get?ids=' + params

  return axios.get(url).then(response => {
    return response.data
  }).catch(error => {
    return Promise.reject(error)
  })
}
