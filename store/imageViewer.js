import { IMAGE_VIEWER_SHOW, IMAGE_VIEWER_HIDE } from '@/store/mutations.constants'

export const state = () => ({
  show: false,
  imageUrl: '',
  pageTitle: ''
})

export const mutations = {
  [IMAGE_VIEWER_HIDE]: (state) => {
    state.show = false
  },

  [IMAGE_VIEWER_SHOW]: (state, { imageUrl, pageTitle }) => {
    state.imageUrl = imageUrl
    state.pageTitle = pageTitle
    state.show = true
  }
}
