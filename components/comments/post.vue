<template>
  <form @submit.prevent="addComment" class="standard-width animated fadeIn">
    <p class="mb-l">
      Let people know what you think about this link
    </p>
    <input v-model="name" placeholder="Your name" required>
    <textarea v-model="commentText" placeholder="Your comment" required />
    <button class="with-hover" type="submit">
      Add
    </button>
    <button @click="setIsCommenting(false)" class="with-hover" type="button">
      Cancel
    </button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      name: '',
      commentText: ''
    }
  },
  computed: {
    ...mapState('landing', ['routeId'])
  },
  methods: {
    ...mapActions('comments', [
      'loadComments',
      'submitComment',
      'setIsCommenting'
    ]),
    async addComment () {
      await this.submitComment({
        routeId: this.routeId,
        name: this.name,
        commentText: this.commentText
      })

      this.commentText = ''
      await this.loadComments(this.routeId)
    }
  }
}
</script>

<style scoped lang="scss">
  input, textarea {
    width: 100%;
    margin-bottom: 10px;
    background-color: transparent;
    border: 1px solid white;
    padding: 10px 20px;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
  }
</style>
