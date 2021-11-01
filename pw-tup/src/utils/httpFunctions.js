const axios = require('axios');

const baseUrl = 'http://localhost:8000/'

export const httpGet = async (endpoint) => {
  return axios.get(baseUrl + endpoint)
}

export const httpPost = async (endpoint, data) => {
  return axios.post(baseUrl + endpoint, data)
}
