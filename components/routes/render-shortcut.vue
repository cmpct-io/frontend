<template>
  <section>
    <div @click="copy" :title="$t('clickToCopy')" class="box with-hover">
      <p v-text="qualifiedShortcut" />
      <c-icon icon="copy" class="no-margin" />
    </div>

    <nuxt-link :to="shortcut">
      <c-icon icon="link" />
      <span v-text="$t('tryItOut')" />
    </nuxt-link>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('generator', ['shortcut']),
    ...mapGetters('generator', ['qualifiedShortcut'])
  },
  methods: {
    ...mapActions('snackbar', ['showSnackbar']),
    copy () {
      navigator.clipboard.writeText(this.qualifiedShortcut).then(() =>
        this.showSnackbar(this.$t('snackbarMessage'))
      )
    }
  }
}
</script>

<i18n>
{
  "en": {
    "clickToCopy": "Click to copy",
    "tryItOut": "Try it out",
    "snackbarMessage": "Link copied to your clipboard!"
  },
  "fr": {
    "clickToCopy": "Cliquez pour copier",
    "tryItOut": "Essaye le",
    "snackbarMessage": "Lien copié dans votre presse-papiers!"
  }
}
</i18n>
