import randomiser from '@/services/randomiser.js'

export const state = () => ({
  elements: []
})

export const mutations = {
  setElements: (state, elements) => {
    state.elements = elements
  }
}

export const actions = {
  setupBackground: ({ commit }) => {
    const elements = []
    let elementCount = randomiser.generateRandomNumber(10, 25)

    while (elementCount > 0) {
      elements[elements.length] = {
        id: elements.length + 1
      }

      elementCount -= 1
    }

    commit('setElements', elements)
  }
}
