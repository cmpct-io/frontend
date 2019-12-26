import generator from 'shortid'

export const state = () => ({
  target: null,
  shortcut: null
})

export const getters = {
  qualifiedShortcut: state => state.shortcut ? `cmpct.io/${state.shortcut}` : ''
}

export const mutations = {
  setTarget: (state, target) => {
    state.target = target
  },
  setShortcut: (state, shortcut) => {
    state.shortcut = shortcut
  }

}

export const actions = {
  generate: ({ commit }, target) => {
    commit('setTarget', target)

    const shortcut = generator.generate()
    commit('setShortcut', shortcut)
  }
}
