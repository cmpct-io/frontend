<template>
  <c-icon
    @click="setIsGroup(!isGroup)"
    :title="tooltip"
    v-bind:class="{ 'icon-selected' : isGroup }"
    :icon="icon"
    class="secondary icon" />
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('generator', [
      'isGroup'
    ]),

    tooltip () {
      return this.isGroup
        ? this.$t('cancelGroup')
        : this.$t('startGroup')
    },

    icon () {
      return this.isGroup
        ? 'times'
        : 'list-ol'
    }
  },

  methods: mapActions('generator', [
    'setIsGroup'
  ])
}
</script>

<style scoped lang="scss">
.icon {
  transition: all 0.25s ease-in-out;

  &.icon-selected {
    background-color: white;
    color: black !important;
    padding: 5px;
    width: 35px;
    border-radius: 50%;

    .light & {
      background-color: black;
      color: white !important;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "startGroup": "Start a link group",
    "cancelGroup": "Cancel link group"
  },
  "fr": {
    "startGroup": "Démarrer un groupe de liens",
    "cancelGroup": "Annuler le groupe de liens"
  },
  "es": {
    "startGroup": "Comience un grupo de enlaces",
    "cancelGroup": "Cancelar grupo de enlaces"
  }
}
</i18n>
