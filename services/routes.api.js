import axios from 'axios'
import { API_BASE_URI } from '@/services/configuration-service.js'

const postRoute = ({ routeId, target }) =>
  axios.post(`${API_BASE_URI}/routes`, { routeId, target, password: '' })

const getRoute = routeId =>
  axios.get(`${API_BASE_URI}/routes/${routeId}`).then(response => response.data)

export default {
  postRoute,
  getRoute
}
