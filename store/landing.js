import routesApi from '@/services/routes.api.js'

export const state = () => ({
  displayedPanel: 'target', // target / comments / reports
  routeId: null,
  target: null
})

export const mutations = {
  showPanel: (state, panel) => {
    state.displayedPanel = panel
  },
  setRouteData: (state, routeData) => {
    state.routeId = routeData.id
    state.target = routeData.target
  }
}

export const actions = {
  initialise: async ({ commit }, routeId) => {
    commit('showPanel', 'target')
    const routeData = await routesApi.getRoute(routeId)

    if (routeData) {
      commit('setRouteData', routeData)
    }

    return (routeData)
  },
  reset: ({ commit }) => {
    commit('showPanel', 'target')
    commit('setRouteData', { routeId: null, target: null })
  },
  showPanel: ({ commit }, panel) => {
    commit('showPanel', panel)
  }
}
