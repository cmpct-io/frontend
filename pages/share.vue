<template>
  <container>
    <h1>Ready to Share</h1>
    <p>You can share this link with your friends and colleagues now...</p>
    <render-shortcut v-if="shortcut" />
  </container>
</template>

<script>
import { mapState } from 'vuex'
import container from '@/components/layout/container.vue'
import renderShortcut from '@/components/routes/render-shortcut.vue'

export default {
  components: {
    container,
    renderShortcut
  },
  computed: {
    ...mapState('generator', [
      'shortcut'
    ])
  },
  created () {
    if (!this.shortcut) {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
