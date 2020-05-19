export const state = () => ({
  showSnackbar: false,
  snackbarMessage: 'Message not supplied'
})

export const mutations = {
  hide: (state) => {
    state.showSnackbar = false
  },

  show: (state, message) => {
    state.snackbarMessage = message
    state.showSnackbar = true
  }
}

export const actions = {
  hideSnackbar: ({ commit }) =>
    commit('hide'),

  showSnackbar: ({ commit }, message) => {
    commit('show', message)

    setTimeout(function () {
      commit('hide')
    }, 7750)
  }
}
