<template>
  <div class="language-switcher">
    <div @click="toggle" class="cursor-pointer">
      <img
        :src="selectedLanguageIcon"
        class="flag">
    </div>

    <div v-show="expanded" class="expanded">
      <div class="flex-container">
        <p
          v-text="$t('title')"
          class="mb-m flex-grow" />
        <c-icon
          @click="toggle"
          icon="times"
          class="fa-fw cursor-pointer" />
      </div>

      <div @click="change('en')" class="option flex-container with-hover">
        <img
          src="/flags/en.png"
          class="flag">
        <p
          v-text="$t('english')"
          class="flex-grow" />
      </div>

      <div @click="change('fr')" class="option flex-container with-hover">
        <img
          src="/flags/fr.png"
          class="flag">
        <p
          v-text="$t('french')"
          class="flex-grow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      border: 1px solid white;
      padding: 15px;
      width: 300px;
      top: 0;
      right: -15px;

      .option {
        padding: 5px;
        border: 1px solid transparent;
      }

      img.flag {
        margin-right: 20px;
        margin-left: 0;
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
    "french": "French",
    "title": "Choose a language"
  },
  "fr": {
    "english": "Anglais",
    "french": "Français",
    "title": "Choisissez une langue"
  }
}
</i18n>
