<template>
  <div v-show="displayedPanel === 'target'" class="animated fadeIn">
    <h1>Ready to jump?</h1>
    <p class="mb-l">
      This page is a redirect for another website, click the link below if you want to visit it.
    </p>

    <a :href="target" class="box with-hover break-word">
      <img v-show="faviconUrl" :src="faviconUrl" class="favicon hidden-mobile animated bounceIn">
      <p v-text="target" class="text-small" />
      <c-icon icon="chevron-right" class="no-margin hidden-mobile" />
    </a>

    <p v-show="reports.length > 0" class="text-warning animated fadeInDown">
      <c-icon icon="exclamation-circle" class="fa-fw mr-s" />
      <span>Warning: somebody recently reported this link</span>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      faviconUrl: ''
    }
  },
  computed: {
    ...mapState('landing', [
      'displayedPanel',
      'target'
    ]),
    ...mapState('reports', [
      'reports'
    ])
  },
  mounted () {
    try {
      const hostname = (new URL(this.target)).hostname
      this.faviconUrl = `https://${hostname}/favicon.ico`
    } catch (error) {
      this.faviconUrl = ''
    }
  }
}
</script>

<style scoped>
  .favicon {
    margin-left: 15px;
    padding: 5px;
    background-color: white;
    border-radius: 50%;
    width: 42px;
    height: 42px;
  }
</style>
