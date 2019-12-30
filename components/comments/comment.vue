<template>
  <div class="comment flex-container">
    <c-icon icon="user-circle" class="fa-fw mr" />
    <div class="content flex-grow">
      <p class="bold">
        <span v-text="name" class="mr" />
        <span v-text="timeSince" class="text-small" />
      </p>
      <p v-text="commentText" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    commentText: {
      type: String,
      required: true
    },
    dateAdded: {
      type: String,
      required: true
    }
  },
  computed: {
    timeSince () {
      return `(${moment(this.dateAdded).fromNow()})`
    }
  }
}
</script>

<style scoped lang="scss">
  .comment {
    width: 500px;
    margin: 0 auto;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;

    svg {
      font-size: 2rem;
    }

    .content {
      text-align: left;

      p {
        margin: 0;
      }
    }
  }
</style>
