<template>
  <div>
    <h1>Ready to Share</h1>
    <p class="mb-l">
      You can share your link now, simply click the box below to copy it.
    </p>
    <render-shortcut v-if="shortcut" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import renderShortcut from '@/components/routes/render-shortcut.vue'

export default {
  head () {
    return {
      title: `cmpct.io: Share`
    }
  },
  components: {
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
