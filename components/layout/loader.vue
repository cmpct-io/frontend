<template>
  <div v-show="isLoading" class="loader animated fadeIn">
    <c-icon icon="spinner" class="fa-fw fa-spin" />
    <h1>Loading...</h1>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.loader svg {
  font-size: 3rem;
  margin-bottom: 20px;
}
</style>
