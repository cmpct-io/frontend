import routesApi from '@/services/routes.api.js'

export const state = () => ({
  displayedPanel: 'target', // target / comments / reports
  routeId: null,
  target: null,
  password: null
})

export const mutations = {
  showPanel: (state, panel) => {
    state.displayedPanel = panel
  },
  setRouteData: (state, routeData) => {
    state.routeId = routeData.id
    state.target = routeData.target
    state.password = null
  },
  setPassword: (state, password) => {
    state.password = password
  }
}

export const actions = {
  initialise: async ({ commit, state }, routeId) => {
    commit('showPanel', 'target')
    const routeData = await routesApi.getRoute(routeId, state.password)

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
  },
  setPassword: ({ commit }, password) => {
    commit('setPassword', password)
  }
}
