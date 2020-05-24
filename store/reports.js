import reportsApi from '@/services/reports.api.js'

export const state = () => ({
  reports: [],
  isReporting: false
})

export const getters = {
  hasReports: ({ reports }) =>
    reports.length > 0
}

export const mutations = {
  setReports: (state, reports) => {
    state.reports = reports
  },

  setIsReporting: (state, value) => {
    state.isReporting = value
  }
}

export const actions = {
  loadReports: async ({ commit }, routeId) => {
    commit('setReports', [])
    commit('setReports', await reportsApi.getReports(routeId))
  },

  submitReport: async ({ commit }, { routeId, name, reportType }) => {
    await reportsApi.postReport({
      routeId,
      name,
      reportType
    })

    commit('setIsReporting', false)
  },

  setIsReporting: ({ commit }, isReporting) => {
    commit('setIsReporting', isReporting)
  }
}
