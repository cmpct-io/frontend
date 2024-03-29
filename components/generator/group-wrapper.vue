<template>
  <div v-show="hasMultipleLinks">
    <div class="c-group u-border a-fadeIn">
      <generator-group-link
        v-for="(link, index) in links"
        :key="index"
        :link="link" />
    </div>

    <button
      class="u-pointer u-hover"
      @click.once="generateRoute">
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
import clipboardService from '@/services/clipboard-service.js'

export default {
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
      return clipboardService.hasAccess()
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
        if (clipboardService.copy(this.qualifiedShortcut)) {
          this.showSnackbar(`${this.qualifiedShortcut} ${this.$t('snackbarMessage')}`)
        }
        const linkCountStat = new this.$statistics.Counter('Total Links')
        linkCountStat.value = this.links.length
        linkCountStat.publish()

        const linkGeneratedStat = new this.$statistics.HitCounter('Link Generated')
        linkGeneratedStat.publish()

        this.$router.push({ path: `/${this.shortcut}` })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .c-group {
    margin: 0 auto;
    width: 95%;
    max-width: 800px;
    border-bottom: 0;
    border-top: 0;
    margin-bottom: 20px;
    text-align: left;
  }
</style>

<i18n>
{
  "en": {
    "snackbarMessage": "copied to your clipboard",
    "submitText": "Create Group"
  },
  "fr": {
    "snackbarMessage": "copié dans votre presse-papiers",
    "submitText": "Créer un groupe"
  },
  "es": {
    "snackbarMessage": "copiado a su portapapeles",
    "submitText": "Crea un grupo"
  }
}
</i18n>
