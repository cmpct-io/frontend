<template>
  <div class="server-error">
    <h1>Oops something went wrong</h1>
    <p class="mb">
      We seem to have run into an error and can't complete your request...
    </p>
    <nuxt-link to="/" class="square-button with-hover">
      Go back to the Homepage
    </nuxt-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
p {
  margin-bottom: 30px;
}
</style>
