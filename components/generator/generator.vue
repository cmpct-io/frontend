<template>
  <div>
    <form
      v-on:submit.prevent="create"
      class="c-box u-flex-container u-border mb-m">
      <group-button />

      <input
        v-model="target"
        :placeholder="$t('placeholder')"
        :aria-label="$t('placeholder')"
        required>

      <paste-button @paste="paste" />
      <submit-button />
    </form>

    <validation-warning />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { GENERATOR_ADD_LINK, GENERATOR_SET_VALIDATION_WARNING } from '@/store/mutations.constants'
import { TRACK_EVENT } from '@/services/analytics-service.js'
import { IS_VALID_URL } from '@/services/validation-service.js'
import clipboardService from '@/services/clipboard-service.js'

export default {
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
      'generate'
    ]),

    ...mapMutations('generator', [
      GENERATOR_ADD_LINK,
      GENERATOR_SET_VALIDATION_WARNING
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
      this.GENERATOR_SET_VALIDATION_WARNING(!isValid)

      if (isValid) {
        this.GENERATOR_ADD_LINK(this.target)

        if (!this.isGroup) {
          this.generate().then(() => {
            if (clipboardService.copy(this.qualifiedShortcut)) {
              this.showSnackbar(`${this.qualifiedShortcut} ${this.$t('snackbarMessage')}`)
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
    "snackbarMessage": "copied to your clipboard"
  },
  "fr": {
    "placeholder": "Adresse du site Web...",
    "snackbarMessage": "copié dans votre presse-papiers"
  },
  "es": {
    "placeholder": "Dirección web...",
    "snackbarMessage": "copiado a su portapapeles"
  }
}
</i18n>
