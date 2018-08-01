import axios from 'axios'
import Cookies from 'js-cookie'
import { navigateTo } from 'gatsby-link'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
})

const UnAuthMessage = 'Request failed with status code 401'
const key = '_tk'

api.interceptors.request.use(config => {
  const token = Cookies.get(key)
  if (token) config.headers.Authorization = `Bearer ${token}`

  return config
}, err => {
  return Promise.reject(err)
})

api.interceptors.response.use(config => {
  const token = config.headers['x-token']
  if (token) {
    if (token === 'null') {
      Cookies.remove(key)
    } else {
      const inOne = new Date(new Date().getTime() + 10 * 60 * 1000) // 10 minutes
      Cookies.set(key, token, { expires: inOne })
    }
  }
  return config
}, err => {
  if (UnAuthMessage === err.message) {
    window.FB.getLoginStatus(async ({ authResponse }) => {
      if (authResponse) {
        api.post('/auth/facebook', { accessToken: authResponse.accessToken })
      } else {
        Cookies.remove(key)
        navigateTo('/organizer')
      }
    })
  }
  return Promise.reject(err)
})

export default api
