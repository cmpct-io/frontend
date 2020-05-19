<template>
  <div class="language-switcher">
    <div @click="toggle" class="cursor-pointer">
      <img
        :src="selectedLanguageIcon"
        class="flag"
        alt="Flag">
    </div>

    <panel v-if="expanded">
      <div class="flex-container">
        <p
          v-text="$t('title')"
          class="mb-m flex-grow" />
        <c-icon
          @click="toggle"
          icon="times"
          class="fa-fw cursor-pointer" />
      </div>

      <div class="mb-l">
        <language
          :name="$t('english')"
          @selected="change"
          locale="en" />
        <language
          :name="$t('french')"
          @selected="change"
          locale="fr" />
        <language
          :name="$t('spanish')"
          @selected="change"
          locale="es" />
      </div>

      <theme-switcher @close="close" />
    </panel>
  </div>
</template>

<script>
import { ASSET_PATH } from '@/services/configuration-service.js'
import { TRACK_EVENT } from '@/services/analytics-service.js'
import language from '@/components/navigator/language.vue'
import themeSwitcher from '@/components/navigator/theme-switcher.vue'
import panel from '@/components/shared/panel.vue'

export default {
  components: {
    language,
    themeSwitcher,
    panel
  },

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

      if (this.expanded) {
        TRACK_EVENT(this, 'feature/locale/expanded', `Current Language: ${this.$i18n.locale}`)
      }
    },

    change (language) {
      TRACK_EVENT(this, `feature/locale/switched/${language}`)
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
