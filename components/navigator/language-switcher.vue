<template>
  <div class="language-switcher">
    <div @click="toggle" class="cursor-pointer">
      <img
        :src="selectedLanguageIcon"
        class="flag">
    </div>

    <div v-if="expanded" class="expanded with-border">
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
    </div>
  </div>
</template>

<script>
import language from '@/components/navigator/language.vue'
import themeSwitcher from '@/components/navigator/theme-switcher.vue'

export default {
  components: {
    language,
    themeSwitcher
  },
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    selectedLanguageIcon () {
      return `/flags/${this.$i18n.locale}.png`
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

    .expanded {
      position: absolute;
      background-color: black;
      padding: 15px;
      width: 300px;
      top: 0;
      right: -15px;

      .light & {
      background-color: white;
      }
    }
  }

  img.flag {
    height: 35px;
    margin: -10px;
    margin-left: 15px;
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
