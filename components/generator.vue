<template>
  <form v-on:submit.prevent="create" class="generator">
    <input v-model="target">
    <font-awesome-icon icon="paste" class="secondary" title="Paste from clipboard" />
    <font-awesome-icon icon="chevron-circle-right" title="Start the compacter" />
  </form>
</template>

<script>
export default {
  data () {
    return {
      target: ''
    }
  },
  methods: {
    create () {
      this.$router.push({ name: 'share', query: { url: this.target } })
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
    color: white;
    display: flex;
    align-items: center;
    padding-right: 20px;

    svg{
      cursor: pointer;
      font-size: 40px;
      margin-left: 20px;

      &.secondary{
        color: gray;

        &:hover {
          color: white;
        }
      }
    }
  }

  input {
    background-color: transparent;
    padding: 20px 40px;
    border: 0;
    font-size: 30px;
    color: white;
    outline: 0;
    width: 100%;
    flex-grow: 1;
  }
</style>
