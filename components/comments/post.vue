<template>
  <div class="poster">
    <h5>Post a comment</h5>
    <input v-model="name" placeholder="Your name">
    <textarea v-model="commentText" placeholder="Your comment" />
    <button @click="addComment" class="with-hover" type="button">
      Add
    </button>
  </div>
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
      'submitComment'
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
  .poster {
    width: 500px;
    margin: 0 auto;
    padding-top: 20px;
    text-align: left;

    h5 {
      margin-bottom: 10px;
    }
  }

  input, textarea {
    width: 100%;
    margin-bottom: 10px;
    background-color: transparent;
    border: 1px solid white;
    padding: 10px 20px;
    color: white;
    font-size: 1rem;
  }

  button {
    margin-bottom: 10px;
    background-color: transparent;
    border: 1px solid white;
    padding: 10px 20px;
    color: white;
  }
</style>
