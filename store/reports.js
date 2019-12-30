import reportsApi from '@/services/reports.api.js'

export const state = () => ({
  reports: []
})

export const mutations = {
  setReports: (state, reports) => {
    state.reports = reports
  }
}

export const actions = {
  loadReports: async ({ commit }, routeId) => {
    commit('setReports', [])
    commit('setReports', await reportsApi.getReports(routeId))
  },
  submitReport: ({ commit }, { routeId, name, reportType }) => {
    reportsApi.postReport({
      routeId,
      name,
      reportType
    })
  }
}
