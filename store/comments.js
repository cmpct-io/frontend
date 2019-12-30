import commentsApi from '@/services/comments.api.js'

export const state = () => ({
  comments: [],
  isCommenting: false
})

export const mutations = {
  setComments: (state, comments) => {
    state.comments = comments
  },
  setIsCommenting: (state, value) => {
    state.isCommenting = value
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

    commit('setIsCommenting', false)
  },
  setIsCommenting: ({ commit }, isCommenting) => {
    commit('setIsCommenting', isCommenting)
  }
}
