<template>
  <div :class="uiMode">
    <not-found
      v-if="error.statusCode === 404" />

    <error-server-error
      v-else />
  </div>
</template>

<script>
import uiModeMixin from '@/mixins/ui-mode-mixin.vue'

export default {
  mixins: [uiModeMixin],

  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
