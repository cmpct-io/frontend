import randomiser from '@/services/randomiser.js'

export const state = () => ({
  elements: [],
  isDarkMode: true
})

export const mutations = {
  setElements: (state, elements) => {
    state.elements = elements
  },
  setUIMode: (state, isDarkMode) => {
    state.isDarkMode = isDarkMode
  }
}

export const actions = {
  setupBackground: ({ commit }) => {
    const elements = []
    let elementCount = randomiser.generateRandomNumber(20, 40)

    while (elementCount > 0) {
      elements.push({
        id: elements.length + 1
      })

      elementCount -= 1
    }

    commit('setElements', elements)
  },
  setUIMode: ({ commit }, isDarkMode) => {
    commit('setUIMode', isDarkMode)
  }
}
