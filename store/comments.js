import commentsApi from '@/services/comments.api.js'

export const actions = {
  submitComment: ({ commit }, { routeId, name, commentText }) => {
    commentsApi.postComment({
      routeId,
      name,
      commentText
    })
  }
}
