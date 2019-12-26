<template>
  <form v-on:submit.prevent="create" class="box">
    <input v-model="target" placeholder="Where do you want to go?">
    <font-awesome-icon @click="paste" icon="paste" class="secondary no-margin" title="Paste from clipboard" />
    <font-awesome-icon @click="create" icon="chevron-circle-right" class="no-margin" title="Start the compacter" />
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      target: ''
    }
  },
  methods: {
    ...mapActions('generator', ['generate']),
    create () {
      this.generate(this.target).then(() => {
        this.$router.push({ name: 'share' })
      })
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
    font-size: 1rem;
    color: white;
    outline: 0;
    width: 100%;
    flex-grow: 1;
  }
</style>
