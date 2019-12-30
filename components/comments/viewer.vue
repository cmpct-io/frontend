<template>
  <div v-show="displayedPanel === 'comments'" class="animated slideInUp">
    <h1>Comments</h1>

    <div v-show="!isCommenting && comments.length > 0" class="animated fadeIn">
      <p>Would you like to <span @click="setIsCommenting(true)" class="text-link">add a comment?</span></p>
      <comment v-for="(item, index) in comments" :key="index" v-bind="item" />
    </div>

    <div v-show="!isCommenting && comments.length === 0">
      <p>Nobody has left any comments on this link yet, <span @click="setIsCommenting(true)" class="text-link">why not be the first?</span></p>
    </div>

    <post v-show="isCommenting" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import comment from '@/components/comments/comment.vue'
import post from '@/components/comments/post.vue'

export default {
  components: {
    comment,
    post
  },
  computed: {
    ...mapState('landing', [
      'routeId',
      'displayedPanel'
    ]),
    ...mapState('comments', [
      'comments',
      'isCommenting'
    ])
  },
  methods: {
    ...mapActions('comments', [
      'setIsCommenting'
    ])
  }
}
</script>
