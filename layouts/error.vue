<template>
  <div :class="uiMode">
    <not-found
      v-if="error.statusCode === 404" />

    <server-error
      v-else />
  </div>
</template>

<script>
import uiModeMixin from '@/mixins/ui-mode-mixin.vue'
import notFound from '@/components/error/not-found.vue'
import serverError from '@/components/error/server-error.vue'

export default {
  components: {
    notFound,
    serverError
  },

  mixins: [uiModeMixin],

  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
