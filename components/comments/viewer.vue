<template>
  <div v-show="displayedPanel === 'comments'" class="animated slideInUp">
    <h1>Comments</h1>
    <p>Here are some recent comments about this link</p>

    <comment v-for="(item, index) in comments" :key="index" v-bind="item" />
    <post />
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
      'comments'
    ])
  }
}
</script>
