export const state = () => ({
  openSpoilerText: ''
})

export const mutations = {
  setOpenSpoilerText: (state, spoilerText) => {
    state.openSpoilerText = spoilerText
  }
}

export const actions = {
  setOpenSpoilerText: ({ commit, state }, spoilerText) => {
    if (state.openSpoilerText === spoilerText) {
      commit('setOpenSpoilerText', '')
    } else {
      commit('setOpenSpoilerText', spoilerText)
    }
  }
}
