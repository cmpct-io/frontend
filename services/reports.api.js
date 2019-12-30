import axios from 'axios'
import { API_BASE_URI } from '@/services/configuration-service.js'

const postReport = ({ routeId, name, reportType }) =>
  axios.post(`${API_BASE_URI}/reports`, { routeId, name, reportType })

const getReports = routeId =>
  axios.get(`${API_BASE_URI}/routes/${routeId}/reports`).then(response => response.data)

export default {
  postReport,
  getReports
}
