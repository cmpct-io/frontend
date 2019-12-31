<template>
  <div v-show="displayedPanel === 'target'">
    <h1>Ready to jump?</h1>
    <p>This page is a redirect for another website, do you want to visit it?</p>

    <a :href="target" class="box with-hover break-word">
      <c-icon icon="globe" class="no-margin hidden-mobile" />
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
  }
}
</script>
