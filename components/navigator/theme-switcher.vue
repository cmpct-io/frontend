<template>
  <div>
    <p v-text="$t('title')" class="mb-m" />
    <div class="flex-container">
      <p @click="setUIMode(true) && $emit('close')" class="ui-option with-hover">
        <c-icon icon="moon" class="fa-fw mr" />
        <span v-text="$t('dark')" />
      </p>
      <p @click="setUIMode(false) && $emit('close')" class="ui-option with-hover">
        <c-icon icon="lightbulb" class="fa-fw mr" />
        <span v-text="$t('light')" />
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('background', [
      'isDarkMode'
    ])
  },
  methods: {
    ...mapActions('background', [
      'setUIMode'
    ])
  }
}
</script>

<style scoped>
  .ui-option {
    border: 1px solid transparent;
    margin-right: 5px;
    padding: 5px;
  }
</style>

<i18n>
{
  "en": {
    "title": "Choose a theme",
    "dark": "Dark",
    "light": "Light"
  },
  "fr": {
    "title": "Choisissez un thème",
    "dark": "Foncé",
    "light": "Lumière"
  },
  "es": {
    "title": "Elige un tema",
    "dark": "Oscuro",
    "light": "Ligero"
  }
}
</i18n>
