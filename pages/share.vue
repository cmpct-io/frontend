<template>
  <section class="share">
    <p v-text="shareUrl" />
  </section>
</template>

<script>
export default {
  computed: {
    shareUrl () {
      return this.$route.query.url
    }
  }
}
</script>

<style scoped>

</style>
