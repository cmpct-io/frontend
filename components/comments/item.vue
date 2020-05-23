<template>
  <div class="c-comment u-standard-width u-flex-container u-border mb-m">
    <c-icon
      icon="user-circle"
      class="fa-fw mr" />

    <div class="u-flex-grow">
      <p class="u-bold mb">
        <span
          v-text="name"
          class="mr" />
        <span
          v-text="timeSince"
          class="u-text-small" />
      </p>
      <p v-text="text" />
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

    text: {
      type: String,
      required: true
    },

    added: {
      type: String,
      required: true
    }
  },

  computed: {
    timeSince () {
      return `(${moment(this.added).fromNow()})`
    }
  }
}
</script>

<style scoped lang="scss">
  .c-comment {
    padding: 10px;
    text-align: left;

    svg {
      font-size: 2rem;
    }
  }
</style>
