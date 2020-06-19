import { REPORTS_SET_REPORTS, REPORTS_SET_IS_REPORTING } from '@/store/mutations.constants'
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
  [REPORTS_SET_REPORTS]: (state, reports) => {
    state.reports = reports
  },

  [REPORTS_SET_IS_REPORTING]: (state, value) => {
    state.isReporting = value
  }
}

export const actions = {
  loadReports: async ({ commit }, routeId) => {
    commit(REPORTS_SET_REPORTS, [])
    commit(REPORTS_SET_REPORTS, await reportsApi.getReports(routeId))
  },

  submitReport: async ({ commit }, { routeId, name, reportType }) => {
    await reportsApi.postReport({
      routeId,
      name,
      reportType
    })

    commit(REPORTS_SET_IS_REPORTING, false)
  }
}
