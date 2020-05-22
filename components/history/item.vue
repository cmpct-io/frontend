<template>
  <div @click="trackEvent">
    <nuxt-link
      :to="shortcut"
      class="c-item u-flex-container u-hover u-border">
      <p v-text="title" class="u-flex-grow" />
      <c-icon
        icon="chevron-right"
        class="arrow" />
    </nuxt-link>
  </div>
</template>

<script>
import { TRACK_EVENT } from '@/services/analytics-service.js'

export default {
  props: {
    shortcut: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    qualifiedShortcut () {
      return `cmpct.io/${this.shortcut}`
    }
  },

  methods: {
    trackEvent () {
      TRACK_EVENT(this, 'feature/history/interact', `Shortcut: ${this.shortcut}`)
    }
  }
}
</script>

<style scoped lang="scss">
  .c-item {
    padding: 15px;
    width: 800px;
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: left;
    cursor: pointer;

    svg {
      margin-right: 10px;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      svg.arrow {
        margin-right: 0;
        margin-left: 10px;
      }
    }
  }
</style>
