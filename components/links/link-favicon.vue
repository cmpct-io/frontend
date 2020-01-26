<template>
  <div class="favicon">
    <img
      v-show="faviconUrl && !hasImageError"
      :src="faviconUrl"
      :alt="$t('altText')"
      @error="hasImageError = true"
      class="hidden-mobile animated bounceIn">
    <c-icon
      v-show="hasImageError"
      icon="external-link-alt"
      class="hidden-mobile animated fadeIn" />
  </div>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      faviconUrl: '',
      hasImageError: false
    }
  },
  created () {
    try {
      const hostname = (new URL(this.target)).hostname
      this.faviconUrl = `https://${hostname}/favicon.ico`
    } catch (error) {
      this.faviconUrl = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .favicon img, .favicon svg {
    margin-left: 10px;
    padding: 5px;
    background-color: white;
    color: black;
    border-radius: 50%;
    width: 42px;
    min-width: 42px;
    height: 42px;
    overflow: hidden;

    .light & {
      background-color: whitesmoke;
    }
  }

  .favicon svg {
    padding: 10px;
  }
</style>

<i18n>
{
  "en": {
    "altText": "Website favicon"
  },
  "fr": {
    "altText": "Favicon du site"
  },
  "es": {
    "altText": "Sitio web favicon"
  }
}
</i18n>
