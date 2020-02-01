<template>
  <div>
    <form
      v-on:submit.prevent="create"
      class="box flex-container with-border mb-m">
      <group-button />

      <input
        v-model="target"
        :placeholder="$t('placeholder')"
        required>

      <paste-button @paste="paste" />
      <submit-button />
    </form>

    <validation-warning />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { TRACK_EVENT } from '@/services/analytics-service.js'
import { IS_VALID_URL } from '@/services/validation-service.js'
import storageService from '@/services/storage-service.js'
import clipboardService from '@/services/clipboard-service.js'
import groupButton from '@/components/generator/group-button.vue'
import pasteButton from '@/components/generator/paste-button.vue'
import submitButton from '@/components/generator/submit-button.vue'
import validationWarning from '@/components/generator/validation-warning.vue'

export default {
  components: {
    groupButton,
    pasteButton,
    submitButton,
    validationWarning
  },

  data () {
    return {
      target: ''
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
      'addLink',
      'setValidationWarning'
    ]),

    ...mapActions('snackbar', [
      'showSnackbar'
    ]),

    async paste () {
      this.target = await clipboardService.paste()
      this.create()
    },

    create () {
      const isValid = IS_VALID_URL(this.target)
      this.setValidationWarning(!isValid)

      if (isValid) {
        this.addLink(this.target)

        if (!this.isGroup) {
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
    }
  }
}
</script>

<style scoped lang="scss">
  input {
    background-color: transparent;
    padding: 20px 10px;
    border: 0;
    outline: 0;
    flex-grow: 1;
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
