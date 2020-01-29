<template>
  <div v-show="hasMultipleLinks">
    <div class="group with-border animated fadeIn">
      <link-display
        v-for="(link, index) in links"
        :key="index"
        :link="link" />
    </div>

    <button
      @click.once="generateRoute"
      class="cursor-pointer with-hover">
      <c-icon
        v-show="isSubmitting"
        icon="spinner"
        class="fa-spin mr" />
      <c-icon
        v-show="!isSubmitting"
        icon="layer-group"
        class="mr" />

      <span v-text="$t('submitText')" />
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { TRACK_EVENT } from '@/services/analytics-service.js'
import storageService from '@/services/storage-service.js'
import linkDisplay from '@/components/generator/link.vue'

export default {
  components: {
    linkDisplay
  },
  data () {
    return {
      isSubmitting: false
    }
  },
  computed: {
    ...mapState('generator', [
      'links',
      'shortcut',
      'isGroup'
    ]),
    ...mapGetters('generator', [
      'qualifiedShortcut',
      'hasMultipleLinks'
    ]),
    isClipboardSupported () {
      return (typeof (navigator) !== 'undefined' && navigator.clipboard)
    }
  },
  methods: {
    ...mapActions('generator', [
      'generate'
    ]),
    ...mapActions('snackbar', [
      'showSnackbar'
    ]),

    generateRoute () {
      this.isSubmitting = true
      this.generate().then(() => {
        storageService.addToHistory(this.shortcut)

        if (this.isClipboardSupported) {
          navigator.clipboard.writeText(this.qualifiedShortcut).then(() =>
            this.showSnackbar(this.$t('snackbarMessage'))
          )
        }

        TRACK_EVENT(this, 'Generate/Group', `Shortcut: ${this.shortcut}`)

        this.$router.push({ path: `/${this.shortcut}` })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .group {
    margin: 0 auto;
    width: 95%;
    max-width: 800px;
    border-bottom: 0;
    border-bottom: 0;
    margin-bottom: 20px;
    text-align: left;

    .light & {
      border-bottom: 0;
    }
  }
</style>

<i18n>
{
  "en": {
    "snackbarMessage": "Link copied to your clipboard!",
    "submitText": "Submit Group"
  },
  "fr": {
    "snackbarMessage": "Lien copié dans votre presse-papiers!",
    "submitText": "Soumettre un groupe"
  },
  "es": {
    "snackbarMessage": "Enlace copiado a su portapapeles!",
    "submitText": "Enviar grupo"
  }
}
</i18n>
