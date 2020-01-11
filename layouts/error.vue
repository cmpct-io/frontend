<template>
  <div class="container animated fadeIn">
    <not-found v-if="error.statusCode === 404" />
    <server-error v-else />
  </div>
</template>

<script>
import notFound from '@/components/error/not-found.vue'
import serverError from '@/components/error/server-error.vue'

export default {
  components: {
    notFound,
    serverError
  },
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
