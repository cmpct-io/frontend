import axios from 'axios'
import { API_BASE_URI } from '@/services/configuration-service.js'

const postComment = ({ routeId, name, commentText }) =>
  axios.post(`${API_BASE_URI}/comments`, { routeId, name, commentText })

const getComments = routeId =>
  axios.get(`${API_BASE_URI}/routes/${routeId}/comments`).then(response => response.data)

export default {
  postComment,
  getComments
}
