export const state = () => ({
  displayedPanel: 'target' // target / comments / reports
})

export const mutations = {
  showPanel: (state, panel) => {
    state.displayedPanel = panel
  }
}

export const actions = {
  initialise: ({ commit }) => {
    commit('showPanel', 'target')
  },
  showPanel: ({ commit }, panel) => {
    commit('showPanel', panel)
  }
}
