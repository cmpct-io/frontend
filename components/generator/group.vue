<template>
  <div v-show="hasMultipleLinks">
    <div class="group animated fadeIn">
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
    ])
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

        navigator.clipboard.writeText(this.qualifiedShortcut).then(() =>
          this.showSnackbar(this.$t('snackbarMessage'))
        )

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
    border-radius: 5px;
    border: 1px solid white;
    border-bottom: 0;
    color: white;
    margin-bottom: 20px;
    text-align: left;

    .light & {
      border: 1px solid black;
      border-bottom: 0;
      color: black;
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
