<template>
  <c-icon
    v-show="show"
    :title="$t('tooltipMessage')"
    icon="clipboard"
    class="secondary"
    @click="$emit('paste')" />
</template>

<script>
import clipboardService from '@/services/clipboard-service.js'

export default {
  computed: {
    show () {
      return clipboardService.hasAccess()
    }
  }
}
</script>

<i18n>
{
  "en": {
    "tooltipMessage": "Paste from clipboard"
  },
  "fr": {
    "tooltipMessage": "Coller depuis le presse-papiers"
  },
  "es": {
    "tooltipMessage": "Pegar desde el portapapeles"
  }
}
</i18n>
