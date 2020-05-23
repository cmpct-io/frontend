<template>
  <a
    @click="copyToClipboard"
    v-show="show"
    :title="$t('hoverText')"
    href="#"
    class="u-flex-container">
    <c-icon icon="copy" class="c-icon mr" />
    <span v-text="$t('hoverText')" class="u-text-small" />
  </a>
</template>

<script>
import { mapActions } from 'vuex'
import clipboardService from '@/services/clipboard-service.js'

export default {
  props: {
    pageUrl: {
      type: String,
      required: true
    }
  },

  computed: {
    show () {
      return clipboardService.hasAccess()
    }
  },

  methods: {
    ...mapActions('snackbar', [
      'showSnackbar'
    ]),

    copyToClipboard () {
      clipboardService.copy(this.pageUrl)
      this.showSnackbar(`${this.pageUrl} ${this.$t('snackbarMessage')}`)
    }
  }
}
</script>

<style scoped>
  .c-icon {
    font-size: 2rem;
  }
</style>

<i18n>
{
  "en": {
    "hoverText": "Copy link to clipboard...",
    "snackbarMessage": "copied to your clipboard"
  },
  "fr": {
    "hoverText": "Partager sur Facebook...",
    "snackbarMessage": "copié dans votre presse-papiers"
  },
  "es": {
    "hoverText": "Compartir en Facebook...",
    "snackbarMessage": "copiado a su portapapeles"
  }
}
</i18n>
