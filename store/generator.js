import generator from 'shortid'
import routesApi from '@/services/routes.api.js'

export const state = () => ({
  isGroup: false,
  links: [],
  shortcut: null,
  showValidationWarning: false,
  isSubmitting: false
})

export const getters = {
  qualifiedShortcut: state =>
    state.shortcut ? `cmpct.io/${state.shortcut}` : '',

  hasMultipleLinks: state =>
    state.isGroup && state.links.length > 0
}

export const mutations = {
  reset: (state) => {
    state.links = []
    state.isGroup = false
    state.shortcut = null
    state.showValidationWarning = false
  },

  setValidationWarning: (state, show) => {
    state.showValidationWarning = show
  },

  setShortcut: (state, shortcut) => {
    state.shortcut = shortcut
  },

  setIsSubmitting: (state, value) => {
    state.isSubmitting = value
  },

  setIsGroup: (state, isGroup) => {
    state.isGroup = isGroup
    state.links = []
  },

  addLink: (state, link) => {
    if (!link.startsWith('http')) {
      link = `https://${link}`
    }

    state.links.push(link)
  },

  removeLink: (state, link) => {
    state.links = state.links.filter(lnk => lnk !== link)
  }
}

export const actions = {
  generate: async ({ commit, state }) => {
    commit('setIsSubmitting', true)

    const shortcut = generator.generate()

    await routesApi.postRoute({
      routeId: shortcut,
      links: state.links
    })

    commit('setShortcut', shortcut)
    commit('setIsSubmitting', false)
  },

  reset: ({ commit }) =>
    commit('reset'),

  setValidationWarning: ({ commit }, show) =>
    commit('setValidationWarning', show),

  setIsGroup: ({ commit }, isGroup) =>
    commit('setIsGroup', isGroup),

  addLink: ({ commit }, link) =>
    commit('addLink', link),

  removeLink: ({ commit }, link) =>
    commit('removeLink', link)
}
