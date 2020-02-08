<template>
  <div class="video-link">
    <a v-show="!showValidationWarning && !isGroup" href="https://youtu.be/KY3ufDTRpY4" target="_blank" class="animated slideInDown">
      <c-icon :icon="['fab', 'youtube']" class="mr" />
      <span v-text="$t('text')" />
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('generator', [
      'showValidationWarning',
      'isGroup'
    ])
  }
}
</script>

<style scoped>
.video-link {
  padding: 10px;
}
</style>

<i18n>
{
  "en": {
    "text": "What is cmpct.io?"
  },
  "fr": {
    "text": "Qu'est-ce que cmpct.io?"
  },
  "es": {
    "text": "¿Qué es cmpct.io?"
  }
}
</i18n>
