import routesApi from '@/services/routes.api.js'

export const state = () => ({
  displayedPanel: 'target', // target / comments / reports
  routeId: null,
  links: []
})

export const mutations = {
  showPanel: (state, panel) => {
    state.displayedPanel = panel
  },
  setRouteData: (state, routeData) => {
    state.routeId = routeData.id
    state.links = routeData.links
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
    commit('setRouteData', { routeId: null, links: [] })
  },
  showPanel: ({ commit }, panel) => {
    commit('showPanel', panel)
  }
}
