<template>
  <div class="not-found">
    <h1>
      Oops something went wrong
    </h1>
    <p class="mb">
      We can't find the page you are looking for...
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
