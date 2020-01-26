<template>
  <div>
    <form
      v-on:submit.prevent="create"
      class="box flex-container with-border mb-m">
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
        v-show="isClipboardSupported"
        @click="paste"
        :title="$t('pasteInfo')"
        icon="clipboard"
        class="secondary" />

      <button
        class="no-button"
        type="submit">
        <c-icon
          :title="$t('submitInfo')"
          :icon="submitIcon"
          v-bind:class="{ 'fa-spin' : isSubmitting }" />
      </button>
    </form>

    <warning-message v-show="showWarning" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import storageService from '@/services/storage-service.js'
import warningMessage from '@/components/generator/warning.vue'

export default {
  components: {
    warningMessage
  },
  data () {
    return {
      target: '',
      showWarning: false,
      isSubmitting: false
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
      if (this.isSubmitting) {
        return 'spinner'
      }

      return this.isGroup
        ? 'plus-circle'
        : 'chevron-circle-right'
    },
    isClipboardSupported () {
      return (typeof (navigator) !== 'undefined' && navigator.clipboard)
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

        if (!this.isGroup) {
          this.isSubmitting = true
          this.generate().then(() => {
            storageService.addToHistory(this.shortcut)

            if (this.isClipboardSupported) {
              navigator.clipboard.writeText(this.qualifiedShortcut).then(() =>
                this.showSnackbar(this.$t('snackbarMessage'))
              )
            }

            this.$router.push({ path: `/${this.shortcut}` })
          })
        } else {
          this.target = ''
        }
      }
    },
    paste () {
      if (this.isClipboardSupported) {
        navigator.clipboard.readText().then((text) => {
          if (text) {
            this.target = text
            this.create()
          }
        })
      }
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
    padding: 20px 10px;
    border: 0;
    font-size: 1rem;
    outline: 0;
    width: 100%;
    flex-grow: 1;
  }

  button.no-button {
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    outline: none;

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
    "snackbarMessage": "Link copied to your clipboard!"
  },
  "fr": {
    "placeholder": "Adresse du site Web...",
    "pasteInfo": "Coller depuis le presse-papiers",
    "linkGroupInfo": "Créer un groupe de liens",
    "submitInfo": "Commencez le plus compact",
    "snackbarMessage": "Lien copié dans votre presse-papiers!"
  },
  "es": {
    "placeholder": "Dirección web...",
    "pasteInfo": "Pegar desde el portapapeles",
    "linkGroupInfo": "Crear un grupo de enlaces",
    "submitInfo": "Inicia el compactador",
    "snackbarMessage": "Enlace copiado a su portapapeles!"
  }
}
</i18n>
