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

      <paste-button @paste="paste" />

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
import { TRACK_EVENT } from '@/services/analytics-service.js'
import storageService from '@/services/storage-service.js'
import clipboardService from '@/services/clipboard-service.js'
import pasteButton from '@/components/generator/paste-button.vue'
import warningMessage from '@/components/generator/warning.vue'

export default {
  components: {
    pasteButton,
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

    async paste () {
      this.target = await clipboardService.paste()
      this.create()
    },
    create () {
      this.validateInput()

      if (!this.showWarning) {
        this.addLink(this.target)

        if (!this.isGroup) {
          this.isSubmitting = true
          this.generate().then(() => {
            storageService.addToHistory(this.shortcut)

            if (clipboardService.copy(this.qualifiedShortcut)) {
              this.showSnackbar(this.$t('snackbarMessage'))
            }

            TRACK_EVENT(this, 'feature/generate/single', `Shortcut: ${this.shortcut}`)

            this.$router.push({ path: `/${this.shortcut}` })
          })
        } else {
          this.target = ''
        }
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
    "linkGroupInfo": "Create a link group",
    "submitInfo": "Start the compacter",
    "snackbarMessage": "Link copied to your clipboard!"
  },
  "fr": {
    "placeholder": "Adresse du site Web...",
    "linkGroupInfo": "Créer un groupe de liens",
    "submitInfo": "Commencez le plus compact",
    "snackbarMessage": "Lien copié dans votre presse-papiers!"
  },
  "es": {
    "placeholder": "Dirección web...",
    "linkGroupInfo": "Crear un grupo de enlaces",
    "submitInfo": "Inicia el compactador",
    "snackbarMessage": "Enlace copiado a su portapapeles!"
  }
}
</i18n>
