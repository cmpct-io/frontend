import routesApi from '@/services/routes.api.js'
import reportsApi from '@/services/reports.api.js'

export const state = () => ({
  displayedPanel: 'target', // target / comments / reports
  routeId: null,
  target: null,
  reports: []
})

export const mutations = {
  showPanel: (state, panel) => {
    state.displayedPanel = panel
  },
  setRouteData: (state, routeData) => {
    state.routeId = routeData.id
    state.target = routeData.target
  },
  setReports: (state, reports) => {
    state.reports = reports
  }
}

export const actions = {
  initialise: async ({ commit }, routeId) => {
    commit('showPanel', 'target')
    commit('setRouteData', await routesApi.getRoute(routeId))
    commit('setReports', await reportsApi.getReports(routeId))
  },
  reset: ({ commit }) => {
    commit('showPanel', 'target')
    commit('setRouteData', { routeId: null, target: null })
    commit('setReports', [])
  },
  showPanel: ({ commit }, panel) => {
    commit('showPanel', panel)
  }
}
