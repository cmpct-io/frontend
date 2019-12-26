<template>
  <form v-on:submit.prevent="create" class="box">
    <input v-model="target" placeholder="Where do you want to go?">
    <font-awesome-icon @click="paste" icon="paste" class="secondary no-margin" title="Paste from clipboard" />
    <font-awesome-icon @click="create" icon="chevron-circle-right" class="no-margin" title="Start the compacter" />
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
    },
    paste () {
      navigator.clipboard.readText().then((text) => {
        if (text) {
          this.target = text
          this.create()
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  input {
    background-color: transparent;
    padding: 20px 30px;
    border: 0;
    font-size: 25px;
    color: white;
    outline: 0;
    width: 100%;
    flex-grow: 1;
  }
</style>
