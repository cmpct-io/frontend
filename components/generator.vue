<template>
  <div class="generator">
    <input v-model="target" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      target: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .generator {
    display: inline-block;
    border: 1px solid white;
    border-radius: 5px;
    margin: 0 auto;
    width: 90%;
    max-width: 800px;
  }

  input {
    background-color: transparent;
    padding: 20px 40px;
    border: 0;
    font-size: 30px;
    color: white;
    outline: 0;
    width: 100%;
  }
</style>
