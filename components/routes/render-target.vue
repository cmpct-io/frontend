<template>
  <div v-show="displayedPanel === 'target'" class="animated fadeIn">
    <h1>Ready to jump?</h1>
    <p>This page is a redirect for another website, do you want to visit it?</p>

    <a :href="target" class="box with-hover break-word">
      <img v-show="faviconUrl" :src="faviconUrl" class="favicon hidden-mobile animated bounceIn">
      <p v-text="target" class="text-small" />
      <c-icon icon="chevron-right" class="no-margin hidden-mobile" />
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('landing', [
      'displayedPanel',
      'target'
    ])
  },
  data () {
    return {
      faviconUrl: ''
    }
  },
  mounted () {
    const hostname = (new URL(this.target)).hostname
    this.faviconUrl = `https://${hostname}/favicon.ico`
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
