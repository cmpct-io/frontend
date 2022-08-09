<template>
  <c-icon
    :title="tooltip"
    :class="{ 'icon-selected' : isGroup }"
    :icon="icon"
    class="secondary icon"
    @click="GENERATOR_SET_IS_GROUP(!isGroup)" />
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { GENERATOR_SET_IS_GROUP } from '@/store/mutations.constants'

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

  methods: mapMutations('generator', [
    GENERATOR_SET_IS_GROUP
  ])
}
</script>

<style scoped lang="scss">
.icon {
  transition: all 0.2s ease-in-out;
  min-width: 35px;
  padding: 2px;
  margin-right: 0;

  &.icon-selected {
    background-color: white;
    color: black !important;
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
