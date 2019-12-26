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
      this.showSnackbar('The link has been copied to your clipboard!')
    }
  }
}
</script>
