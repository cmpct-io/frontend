import historyService from '@/services/history-service.js'

export const state = () => ({
  items: []
})

export const mutations = {
  setItems: (state, items) => {
    state.items = items
  }
}

export const actions = {
  initialise: ({ commit }) =>
    commit('setItems', historyService.get())
}
