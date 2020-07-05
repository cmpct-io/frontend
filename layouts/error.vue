<template>
  <container>
    <div :class="uiMode">
      <not-found
        v-if="error.statusCode === 404" />

      <server-error
        v-else />
    </div>
  </container>
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
