import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://192.168.1.22:3001/api/v1'
})

export default instance
