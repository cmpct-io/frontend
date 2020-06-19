import { BACKGROUND_SET_ELEMENTS } from '@/store/mutations.constants'
import randomiser from '@/services/randomiser.js'

export const state = () => ({
  elements: []
})

export const mutations = {
  [BACKGROUND_SET_ELEMENTS]: (state, elements) => {
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

    commit(BACKGROUND_SET_ELEMENTS, elements)
  }
}
