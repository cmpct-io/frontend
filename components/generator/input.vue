<template>
  <div>
    <form
      v-on:submit.prevent="create"
      class="box flex-container with-border mb-m">
      <group-toggle />

      <input
        v-model="target"
        :placeholder="$t('placeholder')"
        required>

      <paste-button @paste="paste" />
      <submit-button :is-submitting="isSubmitting" />
    </form>

    <warning-message v-show="showWarning" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { TRACK_EVENT } from '@/services/analytics-service.js'
import storageService from '@/services/storage-service.js'
import clipboardService from '@/services/clipboard-service.js'
import groupToggle from '@/components/generator/group-toggle.vue'
import pasteButton from '@/components/generator/paste-button.vue'
import submitButton from '@/components/generator/submit-button.vue'
import warningMessage from '@/components/generator/warning.vue'

export default {
  components: {
    groupToggle,
    pasteButton,
    submitButton,
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
    ])
  },
  methods: {
    ...mapActions('generator', [
      'generate',
      'addLink'
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
    "snackbarMessage": "Link copied to your clipboard!"
  },
  "fr": {
    "placeholder": "Adresse du site Web...",
    "snackbarMessage": "Lien copié dans votre presse-papiers!"
  },
  "es": {
    "placeholder": "Dirección web...",
    "snackbarMessage": "Enlace copiado a su portapapeles!"
  }
}
</i18n>
