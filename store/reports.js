import reportsApi from '@/services/reports.api.js'

export const actions = {
  submitReport: ({ commit }, { routeId, name, reportType }) => {
    reportsApi.postReport({
      routeId,
      name,
      reportType
    })
  }
}
