import generator from 'shortid'
import routesApi from '@/services/routes.api.js'

export const state = () => ({
  target: null,
  shortcut: null
})

export const getters = {
  qualifiedShortcut: state => state.shortcut ? `cmpct.io/${state.shortcut}` : ''
}

export const mutations = {
  setState: (state, { target, shortcut }) => {
    state.target = target
    state.shortcut = shortcut
  }
}

export const actions = {
  generate: ({ commit }, target) => {
    const shortcut = generator.generate()
    commit('setState', { target, shortcut })

    routesApi.postRoute({
      routeId: shortcut,
      target
    })
  }
}
