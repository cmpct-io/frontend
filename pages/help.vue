<template>
  <div>
    <h1
      v-text="$t('pageTitle')"
      class="mb-l" />
    <what-section />
    <privacy-section />
    <price-section />
    <safety-section />
  </div>
</template>

<script>
import whatSection from '@/components/help/what.vue'
import privacySection from '@/components/help/privacy.vue'
import priceSection from '@/components/help/price.vue'
import safetySection from '@/components/help/safety.vue'

export default {
  layout: 'help',

  head () {
    return {
      title: this.$t('pageTitle')
    }
  },

  components: {
    whatSection,
    privacySection,
    priceSection,
    safetySection
  }
}
</script>

<style scoped lang="scss">
  .help-section {
    display: block;
    margin: 0 auto;
    width: 60%;
    padding: 10px;
    max-width: 650px;

    @media (max-width: 768px) {
      width: 100%;
    }

    h4 {
      margin-bottom: 10px;
    }
  }
</style>

<i18n>
{
  "en": {
    "pageTitle": "Help"
  },
  "fr": {
    "pageTitle": "Aidez-moi"
  },
  "es": {
    "pageTitle": "Ayuda"
  }
}
</i18n>
