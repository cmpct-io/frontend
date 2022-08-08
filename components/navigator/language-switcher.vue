<template>
  <div class="language-switcher">
    <div class="u-pointer" @click="toggle">
      <img
        :src="selectedLanguageIcon"
        class="flag"
        alt="Flag">
    </div>

    <shared-panel v-if="expanded">
      <div class="u-flex-container">
        <p
          class="mb-m u-flex-grow"
          v-text="$t('title')" />
        <c-icon
          icon="times"
          class="fa-fw u-pointer"
          @click="toggle" />
      </div>

      <div class="mb-l">
        <navigator-language
          :name="$t('english')"
          locale="en"
          @selected="change" />
        <navigator-language
          :name="$t('french')"
          locale="fr"
          @selected="change" />
        <navigator-language
          :name="$t('spanish')"
          locale="es"
          @selected="change" />
      </div>

      <navigator-theme-switcher @close="close" />
    </shared-panel>
  </div>
</template>

<script>
import { ASSET_PATH } from '@/services/configuration-service.js'

export default {
  data () {
    return {
      expanded: false
    }
  },

  computed: {
    selectedLanguageIcon () {
      return ASSET_PATH(`/flags/${this.$i18n.locale}.png`)
    }
  },

  methods: {
    toggle () {
      this.expanded = !this.expanded
    },

    change (language) {
      this.$root.$i18n.locale = language
      this.$cookies.set('i18n_redirected', language, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      this.close()
    },

    close () {
      this.expanded = false
    }
  }
}
</script>

<style scoped lang="scss">
  .language-switcher {
    display: inline-block;
    position: relative;
    margin-left: 15px;
  }

  img.flag {
    height: 35px;
    margin: -10px;
  }
</style>

<i18n>
{
  "en": {
    "english": "English",
    "french": "Français",
    "spanish": "Español",
    "title": "Choose a language"
  },
  "fr": {
    "english": "English",
    "french": "Français",
    "spanish": "Español",
    "title": "Choisissez une langue"
  },
  "es": {
    "english": "English",
    "french": "Français",
    "spanish": "Español",
    "title": "Elige un idioma"
  }
}
</i18n>
