<template>
  <section class="share-link">
    <div @click="copy" class="box with-hover" title="Click to copy">
      <p v-text="qualifiedShortcut" />
      <c-icon icon="copy" class="no-margin" />
    </div>
    <nuxt-link :to="shortcut">
      <c-icon icon="link" />
      <span>Would you like to visit it?</span>
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
        this.showSnackbar('Link copied to your clipboard!')
      )
    }
  }
}
</script>
