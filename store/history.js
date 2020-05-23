import historyService from '@/services/history-service.js'

export const state = () => ({
  show: false,
  items: []
})

export const mutations = {
  show: (state) => {
    state.show = true
  },

  hide: (state) => {
    state.show = false
  },

  setItems: (state, items) => {
    state.items = items
  }
}

export const actions = {
  showHistory: ({ commit }) =>
    commit('show'),

  hideHistory: ({ commit }) =>
    commit('hide'),

  initialise: ({ commit }) => {
    const historyItems = historyService.get()
    commit('setItems', historyItems)

    if (historyItems.length === 0) {
      commit('hide')
    }
  }
}
