<template>
  <a
    :href="qualifiedTarget"
    @click="track"
    :target="targetValue"
    :title="title"
    class="box flex-container with-border with-hover mb-m">
    <link-favicon :target="target" />
    <div class="link-inner flex-grow">
      <p
        v-if="title"
        v-text="title"
        class="mb" />
      <p
        v-text="target"
        v-bind:class="{ 'text-small' : title }"
        class="break-word" />
    </div>
    <c-icon
      icon="chevron-right"
      class="hidden-mobile mr-m" />
  </a>
</template>

<script>
import { TRACK_EVENT } from '@/services/analytics-service.js'
import linkFavicon from '@/components/links/link-favicon.vue'

export default {
  components: {
    linkFavicon
  },
  props: {
    target: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    newPage: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    qualifiedTarget () {
      return this.target.toLowerCase().startsWith('http')
        ? this.target
        : `https://${this.target}`
    },
    targetValue () {
      return this.newPage
        ? 'blank'
        : ''
    }
  },
  methods: {
    track () {
      TRACK_EVENT(this, 'feature/link/interact', `Link: ${this.qualifiedTarget}`)
    }
  }
}
</script>

<style scoped>
.link-inner {
  padding: 20px 20px;
}
</style>
