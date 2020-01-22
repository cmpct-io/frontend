<template>
  <div>
    <form
      v-on:submit.prevent="create"
      class="box">
      <input
        v-model="target"
        :placeholder="$t('placeholder')"
        required>
      <c-icon
        @click="paste"
        :title="$t('pasteInfo')"
        icon="clipboard"
        class="secondary" />
      <button
        class="no-button"
        type="submit">
        <c-icon
          :title="$t('submitInfo')"
          icon="chevron-circle-right" />
      </button>
    </form>
    <p v-show="showWarning" class="text-warning animated fadeInDown">
      <c-icon
        icon="exclamation-circle"
        class="fa-fw mr-s" />
      <span v-text="$t('enterValidAddress')" />
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
    ...mapState('generator', [
      'shortcut'
    ])
  },
  methods: {
    ...mapActions('generator', [
      'generate'
    ]),
    create () {
      this.validateInput()

      if (!this.showWarning) {
        this.generate([this.target]).then(() => {
          storageService.addToHistory(this.shortcut)
          this.$router.push({ path: '/share' })
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

    .light & {
      color: black;
    }
  }

  button.no-button {
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    color: white;
    cursor: pointer;

    .light & {
      color: black;
    }
  }
</style>

<i18n>
{
  "en": {
    "placeholder": "Website address...",
    "pasteInfo": "Paste from clipboard",
    "submitInfo": "Start the compacter",
    "enterValidAddress": "Please enter a valid website address"
  },
  "fr": {
    "placeholder": "Adresse du site Web...",
    "pasteInfo": "Coller depuis le presse-papiers",
    "submitInfo": "Commencez le plus compact",
    "enterValidAddress": "Veuillez entrer une adresse de site Web valide"
  },
  "es": {
    "placeholder": "Dirección web...",
    "pasteInfo": "Pegar desde el portapapeles",
    "submitInfo": "Inicia el compactador",
    "enterValidAddress": "Por favor, introduzca una dirección de sitio web válida"
  }
}
</i18n>
