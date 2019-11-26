import axios from 'axios'

export const languageService = {
  setLanguage
}

async function setLanguage (params) {
  let url = `${process.env.BASE_URL}locale/${params}.json`
  // We need to now the right context before we can hit the right path
  return axios.get(url).then(response => {
    return response.data
  }).catch(error => {
    return Promise.reject(error)
  })
}
