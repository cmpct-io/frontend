<template>
  <div @click="copy" class="box with-hover" title="Click to copy">
    <p v-text="link" />
    <font-awesome-icon icon="copy" class="no-margin" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions('snackbar', ['showSnackbar']),
    copy () {
      navigator.clipboard.writeText(this.link).then(() =>
        this.showSnackbar('Link copied to your clipboard!')
      )
    }
  }
}
</script>
