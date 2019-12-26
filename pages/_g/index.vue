<template>
  <container>
    <h1>Ready to jump?</h1>
    <p>The link you visited is an alias for a website, do you want to visit it?</p>
    <p v-text="parameter" />
  </container>
</template>

<script>
import container from '@/components/layout/container.vue'

export default {
  components: {
    container
  },
  computed: {
    parameter () {
      return this.$route.query.o
    }
  },
  mounted () {
    // Load Route

    // Display Comments / Reports
  }
}
</script>
