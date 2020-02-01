<template>
  <c-icon
    @click="setIsGroup(!isGroup)"
    :title="tooltip"
    v-bind:class="{ 'icon-selected' : isGroup }"
    icon="list-ol"
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
    }
  },
  methods: {
    ...mapActions('generator', [
      'setIsGroup'
    ])
  }
}
</script>

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
