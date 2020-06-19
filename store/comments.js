import { COMMENTS_SET_COMMENTS, COMMENTS_SET_IS_COMMENTING } from '@/store/mutations.constants'
import commentsApi from '@/services/comments.api.js'

export const state = () => ({
  comments: [],
  isCommenting: false
})

export const mutations = {
  [COMMENTS_SET_COMMENTS]: (state, comments) => {
    state.comments = comments
  },

  [COMMENTS_SET_IS_COMMENTING]: (state, value) => {
    state.isCommenting = value
  }
}

export const actions = {
  loadComments: async ({ commit }, routeId) => {
    commit(COMMENTS_SET_COMMENTS, await commentsApi.getComments(routeId))
  },

  submitComment: async ({ commit }, { routeId, name, commentText }) => {
    await commentsApi.postComment({
      routeId,
      name,
      commentText
    })

    commit(COMMENTS_SET_IS_COMMENTING, false)
  },

  setIsCommenting: ({ commit }, isCommenting) => {
    commit(COMMENTS_SET_IS_COMMENTING, isCommenting)
  }
}
