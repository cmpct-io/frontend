<template>
  <a :href="target" class="box with-hover break-word">
    <link-favicon :target="target" />
    <p
      v-text="target"
      class="text-small" />
    <c-icon
      icon="chevron-right"
      class="hidden-mobile" />
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
