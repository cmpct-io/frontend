export const state = () => ({
  isDarkMode: true
})

export const mutations = {
  setTheme: (state, isDarkMode) => {
    state.isDarkMode = isDarkMode
  }
}

export const actions = {
  setTheme: ({ commit }, isDarkMode) => {
    commit('setTheme', isDarkMode)
  }
}
