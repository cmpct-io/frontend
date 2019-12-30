import commentsApi from '@/services/comments.api.js'

export const state = () => ({
  comments: []
})

export const mutations = {
  setComments: (state, comments) => {
    state.comments = comments
  }
}

export const actions = {
  loadComments: async ({ commit }, routeId) => {
    commit('setComments', [])
    commit('setComments', await commentsApi.getComments(routeId))
  },
  submitComment: async ({ commit }, { routeId, name, commentText }) => {
    await commentsApi.postComment({
      routeId,
      name,
      commentText
    })
  }
}
