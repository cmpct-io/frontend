import { THEME_SET_THEME } from '@/store/mutations.constants'

export const state = () => ({
  isDarkMode: true
})

export const mutations = {
  [THEME_SET_THEME]: (state, isDarkMode) => {
    state.isDarkMode = isDarkMode
  }
}
