export const state = () => ({
  show: false,
  imageUrl: '',
  pageTitle: ''
})

export const mutations = {
  hide: (state) => {
    state.show = false
  },

  show: (state, { imageUrl, pageTitle }) => {
    state.imageUrl = imageUrl
    state.pageTitle = pageTitle
    state.show = true
  }
}

export const actions = {
  hideViewer: ({ commit }) =>
    commit('hide'),

  showViewer: ({ commit }, payload) =>
    commit('show', payload)
}
