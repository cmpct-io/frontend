<template>
  <div v-show="displayedPanel === 'target'">
    <h1>Ready to jump?</h1>
    <p>The link you visited is an alias for a website, do you want to visit it?</p>

    <a :href="target" class="box with-hover break-word" title="Click to navigate">
      <c-icon icon="globe" class="no-margin" />
      <p v-text="target" />
      <c-icon icon="chevron-right" class="no-margin" />
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
