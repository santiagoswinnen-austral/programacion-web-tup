const axios = require('axios');

const baseUrl = 'http://localhost:8000/'

export const httpGet = async (endpoint) => {
  return axios.get(baseUrl + endpoint, {
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

export const httpPost = async (endpoint, data) => {
  return axios.post(baseUrl + endpoint, data, {
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}
