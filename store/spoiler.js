import { SPOILER_SET_MESSAGE } from '@/store/mutations.constants'

export const state = () => ({
  openSpoilerText: ''
})

export const mutations = {
  [SPOILER_SET_MESSAGE]: (state, message) => {
    state.openSpoilerText = message
  }
}

export const actions = {
  setOpenSpoilerText: ({ commit, state }, message) => {
    if (state.openSpoilerText === message) {
      commit(SPOILER_SET_MESSAGE, '')
    } else {
      commit(SPOILER_SET_MESSAGE, message)
    }
  }
}
