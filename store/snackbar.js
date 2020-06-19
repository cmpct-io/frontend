import { SNACKBAR_SHOW, SNACKBAR_HIDE } from '@/store/mutations.constants'

export const state = () => ({
  showSnackbar: false,
  snackbarMessage: 'Message not supplied'
})

export const mutations = {
  [SNACKBAR_HIDE]: (state) => {
    state.showSnackbar = false
  },

  [SNACKBAR_SHOW]: (state, message) => {
    state.snackbarMessage = message
    state.showSnackbar = true
  }
}

export const actions = {
  showSnackbar: ({ commit }, message) => {
    commit(SNACKBAR_SHOW, message)

    setTimeout(function () {
      commit(SNACKBAR_HIDE)
    }, 7750)
  }
}
