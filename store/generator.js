import generator from 'shortid'

import {
  GENERATOR_RESET,
  GENERATOR_SET_VALIDATION_WARNING,
  GENERATOR_SET_SHORTCUT,
  GENERATOR_SET_IS_SUBMITTING,
  GENERATOR_SET_IS_GROUP,
  GENERATOR_ADD_LINK,
  GENERATOR_REMOVE_LINK
} from '@/store/mutations.constants'

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
  [GENERATOR_RESET]: (state) => {
    state.links = []
    state.isGroup = false
    state.shortcut = null
    state.showValidationWarning = false
  },

  [GENERATOR_SET_VALIDATION_WARNING]: (state, show) => {
    state.showValidationWarning = show
  },

  [GENERATOR_SET_SHORTCUT]: (state, shortcut) => {
    state.shortcut = shortcut
  },

  [GENERATOR_SET_IS_SUBMITTING]: (state, value) => {
    state.isSubmitting = value
  },

  [GENERATOR_SET_IS_GROUP]: (state, isGroup) => {
    state.isGroup = isGroup
    state.links = []
  },

  [GENERATOR_ADD_LINK]: (state, link) => {
    if (!link.startsWith('http')) {
      link = `https://${link}`
    }

    state.links.push(link)
  },

  [GENERATOR_REMOVE_LINK]: (state, link) => {
    state.links = state.links.filter(lnk => lnk !== link)
  }
}

export const actions = {
  generate: async ({ commit, state }) => {
    commit(GENERATOR_SET_IS_SUBMITTING, true)

    const shortcut = generator.generate()

    await routesApi.postRoute({
      routeId: shortcut,
      links: state.links
    })

    commit(GENERATOR_SET_SHORTCUT, shortcut)
    commit(GENERATOR_SET_IS_SUBMITTING, false)
  }
}
