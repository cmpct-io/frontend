<template>
  <div @click="copy" class="box with-hover" title="Click to copy">
    <p v-text="qualifiedShortcut" />
    <font-awesome-icon icon="copy" class="no-margin" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
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
