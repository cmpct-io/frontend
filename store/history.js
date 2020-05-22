import { TRACK_EVENT } from '@/services/analytics-service.js'
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
  initialise: ({ commit }) =>
    commit('setItems', historyService.get()),

  hideHistory: ({ commit }) =>
    commit('hide'),

  toggle: ({ state, commit }) => {
    if (state.show) {
      commit('hide')
    } else {
      TRACK_EVENT(this, 'feature/history/expanded')
      commit('show')
    }
  }
}
