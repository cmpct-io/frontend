<template>
  <div>
    <form
      v-on:submit.prevent="create"
      class="box">
      <c-icon
        @click="setIsGroup(!isGroup)"
        :title="$t('linkGroupInfo')"
        v-bind:class="{ 'icon-selected' : isGroup }"
        icon="list-ol"
        class="secondary icon" />

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
          :icon="submitIcon" />
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
import { mapState, mapGetters, mapActions } from 'vuex'
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
      'shortcut',
      'isGroup'
    ]),
    ...mapGetters('generator', [
      'qualifiedShortcut'
    ]),
    submitIcon () {
      return this.isGroup
        ? 'plus-circle'
        : 'chevron-circle-right'
    }
  },
  methods: {
    ...mapActions('generator', [
      'generate',
      'addLink',
      'setIsGroup'
    ]),
    ...mapActions('snackbar', [
      'showSnackbar'
    ]),

    create () {
      this.validateInput()

      if (!this.showWarning) {
        this.addLink(this.target)
        this.target = ''

        if (!this.isGroup) {
          this.generate().then(() => {
            storageService.addToHistory(this.shortcut)

            navigator.clipboard.writeText(this.qualifiedShortcut).then(() =>
              this.showSnackbar(this.$t('snackbarMessage'))
            )

            this.$router.push({ path: `/${this.shortcut}` })
          })
        }
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

  .icon {
    transition: all 0.2s ease-in-out;

    &.icon-selected {
      background-color: white;
      color: black !important;
      padding: 7.5px;
      border-radius: 50%;
      opacity: 1;

      .light & {
        background-color: black;
        color: white !important;
      }
    }
  }
</style>

<i18n>
{
  "en": {
    "placeholder": "Website address...",
    "pasteInfo": "Paste from clipboard",
    "linkGroupInfo": "Create a link group",
    "submitInfo": "Start the compacter",
    "enterValidAddress": "Please enter a valid website address",
    "snackbarMessage": "Link copied to your clipboard!"
  },
  "fr": {
    "placeholder": "Adresse du site Web...",
    "pasteInfo": "Coller depuis le presse-papiers",
    "linkGroupInfo": "Créer un groupe de liens",
    "submitInfo": "Commencez le plus compact",
    "enterValidAddress": "Veuillez entrer une adresse de site Web valide",
    "snackbarMessage": "Lien copié dans votre presse-papiers!"
  },
  "es": {
    "placeholder": "Dirección web...",
    "pasteInfo": "Pegar desde el portapapeles",
    "linkGroupInfo": "Crear un grupo de enlaces",
    "submitInfo": "Inicia el compactador",
    "enterValidAddress": "Por favor, introduzca una dirección de sitio web válida",
    "snackbarMessage": "Enlace copiado a su portapapeles!"
  }
}
</i18n>
