<template>
  <form v-on:submit.prevent="create" class="box">
    <input v-model="target" placeholder="Long URL?" type="url" pattern="https?://.+" required>
    <font-awesome-icon @click="paste" icon="paste" class="secondary no-margin" title="Paste from clipboard" />
    <button class="no-button" type="submit">
      <font-awesome-icon icon="chevron-circle-right" class="no-margin" title="Start the compacter" />
    </button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import storageService from '@/services/storage-service.js'

export default {
  data () {
    return {
      target: ''
    }
  },
  computed: {
    ...mapState('generator', ['shortcut'])
  },
  methods: {
    ...mapActions('generator', ['generate']),
    create () {
      this.generate(this.target).then(() => {
        storageService.addToHistory(this.shortcut)
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

  button.no-button {
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    color: white;
    cursor: pointer;
  }
</style>
