import { HISTORY_SET_ITEMS } from '@/store/mutations.constants'
import historyService from '@/services/history-service.js'

export const state = () => ({
  items: []
})

export const mutations = {
  [HISTORY_SET_ITEMS]: (state, items) => {
    state.items = items
  }
}

export const actions = {
  initialise: ({ commit }) =>
    commit(HISTORY_SET_ITEMS, historyService.get())
}
