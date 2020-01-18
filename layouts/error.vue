<template>
  <div class="container animated fadeIn">
    <not-found v-if="error.statusCode === 404" />
    <unauthorised v-if="error.statusCode === 401" />
    <server-error v-if="error.statusCode === 500" />
  </div>
</template>

<script>
import notFound from '@/components/error/not-found.vue'
import unauthorised from '@/components/error/unauthorised.vue'
import serverError from '@/components/error/server-error.vue'

export default {
  components: {
    notFound,
    unauthorised,
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
