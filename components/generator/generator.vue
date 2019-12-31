<template>
  <div>
    <form v-on:submit.prevent="create" class="box">
      <input v-model="target" placeholder="Website address..." required>
      <c-icon @click="paste" icon="clipboard" class="secondary no-margin" title="Paste from clipboard" />
      <button class="no-button" type="submit">
        <c-icon icon="chevron-circle-right" class="no-margin" title="Start the compacter" />
      </button>
    </form>
    <p v-show="showWarning" class="text-warning animated fadeInDown">
      <c-icon icon="exclamation-circle" class="fa-fw mr-s" />
      <span>Please enter a valid website address</span>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import storageService from '@/services/storage-service.js'

export default {
  data () {
    return {
      target: '',
      showWarning: false
    }
  },
  computed: {
    ...mapState('generator', ['shortcut'])
  },
  methods: {
    ...mapActions('generator', ['generate']),
    create () {
      this.validateInput()

      if (!this.showWarning) {
        this.generate(this.target).then(() => {
          storageService.addToHistory(this.shortcut)
          this.$router.push({ name: 'share' })
        })
      }
    },
    paste () {
      navigator.clipboard.readText().then((text) => {
        if (text) {
          this.target = text
          this.create()
        }
      })
    },
    validateInput () {
      const expression = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi
      const regex = new RegExp(expression)

      this.showWarning = !this.target.match(regex)
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
