import axios from 'axios'
import { getCookie } from 'cookies-next'

const token = getCookie('auth.token')

const api = axios.create({
  baseURL: "http://localhost:3333"
})

if(token){
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}


export default api