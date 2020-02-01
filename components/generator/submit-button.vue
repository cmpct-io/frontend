<template>
  <button
    class="no-button"
    type="submit">
    <c-icon
      :title="submitTitle"
      :icon="submitIcon"
      v-bind:class="{ 'fa-spin' : isSubmitting }" />
  </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('generator', [
      'isGroup',
      'isSubmitting'
    ]),

    submitIcon () {
      if (this.isSubmitting) {
        return 'spinner'
      }

      return this.isGroup
        ? 'plus-circle'
        : 'chevron-circle-right'
    },

    submitTitle () {
      return this.isGroup
        ? this.$t('submitGroup')
        : this.$t('submitSingle')
    }
  }
}
</script>

<style scoped lang="scss">
  button.no-button {
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    outline: none;

    .light & {
      color: black;
    }
  }
</style>

<i18n>
{
  "en": {
    "submitSingle": "Create a link",
    "submitGroup": "Add link to group"
  },
  "fr": {
    "submitSingle": "Créer un lien",
    "submitGroup": "Ajouter un lien au groupe"
  },
  "es": {
    "submitSingle": "Crea un enlace",
    "submitGroup": "Agregar enlace al grupo"
  }
}
</i18n>
