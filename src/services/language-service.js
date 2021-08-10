import axios from 'axios'

export const languageService = {
  setLanguage
}

function setLanguage (params) {
  const url = `${process.env.BASE_URL}locale/${params}.json`
  return axios.get(url).then(response => {
    console.log('axios resp', response)
    return response.data
  }).catch(error => {
    return Promise.reject(error)
  })
}
