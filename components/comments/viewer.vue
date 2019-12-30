<template>
  <div v-show="displayedPanel === 'comments'" class="animated slideInUp">
    <h1>Comments</h1>
    <p>Here are some recent comments about this link</p>
    {{ comments }}

    <button @click="addComment" type="button">
      Add
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('landing', [
      'routeId',
      'displayedPanel',
      'comments'
    ])
  },
  methods: {
    ...mapActions('comments', ['submitComment']),
    addComment () {
      this.submitComment({
        routeId: this.routeId,
        name: 'Donald Duck',
        commentText: 'This is a test'
      })
    }
  }
}
</script>
