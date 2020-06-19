import { ACTIVE_ROUTE_SHOW_PANEL, ACTIVE_ROUTE_SET_ROUTE_DATA } from '@/store/mutations.constants'
import routesApi from '@/services/routes.api.js'

export const state = () => ({
  displayedPanel: 'target', // target / comments / reports
  routeId: null,
  links: [],
  processDate: null
})

export const getters = {
  isProcessed: ({ processDate }) =>
    (processDate)
}

export const mutations = {
  [ACTIVE_ROUTE_SHOW_PANEL]: (state, panel) => {
    state.displayedPanel = panel
  },

  [ACTIVE_ROUTE_SET_ROUTE_DATA]: (state, routeData) => {
    state.routeId = routeData.id
    state.links = routeData.links
    state.processDate = routeData.processDate
  }
}

export const actions = {
  initialise: async ({ commit }, routeId) => {
    commit(ACTIVE_ROUTE_SHOW_PANEL, 'target')
    const routeData = await routesApi.getRoute(routeId)

    if (routeData) {
      commit(ACTIVE_ROUTE_SET_ROUTE_DATA, routeData)
    }

    return (routeData)
  },

  reload: async ({ commit, state }) => {
    const routeData = await routesApi.getRoute(state.routeId)

    if (routeData) {
      commit(ACTIVE_ROUTE_SET_ROUTE_DATA, routeData)
    }
  },

  reset: ({ commit }) => {
    commit(ACTIVE_ROUTE_SHOW_PANEL, 'target')
    commit(ACTIVE_ROUTE_SET_ROUTE_DATA, { routeId: null, links: [] })
  },

  showPanel: ({ commit }, panel) => {
    commit(ACTIVE_ROUTE_SHOW_PANEL, panel)
  }
}
