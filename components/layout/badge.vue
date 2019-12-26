<template>
  <div class="badge">
    <p v-text="text" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.badge {
  display: inline-block;
  border-radius: 5px;
  background-color: white;
  color: black;
  padding: 2.5px 5px;
}

p {
  margin: 0;
  font-size: 0.8rem;
}
</style>
