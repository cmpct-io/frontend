<template>
  <a :href="target" class="box flex-container with-border with-hover break-word mb-m">
    <link-favicon :target="target" />
    <p
      v-text="target"
      class="flex-grow" />
    <c-icon
      icon="chevron-right"
      class="hidden-mobile mr-m" />
  </a>
</template>

<script>
import linkFavicon from '@/components/links/link-favicon.vue'

export default {
  components: {
    linkFavicon
  },
  props: {
    target: {
      type: String,
      required: true
    }
  }
}
</script>
