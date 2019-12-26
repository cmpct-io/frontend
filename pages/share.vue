<template>
  <container>
    <h1>Ready to Share</h1>
    <p>You can share this link with your friends and colleagues now</p>
    <share-link />
  </container>
</template>

<script>
import { mapState } from 'vuex'
import container from '@/components/layout/container.vue'
import shareLink from '@/components/share/share-link.vue'

export default {
  components: {
    container,
    shareLink
  },
  computed: {
    ...mapState('generator', {
      shareUrl: 'shortcut'
    })
  },
  mounted () {
    if (!this.shareUrl) {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
