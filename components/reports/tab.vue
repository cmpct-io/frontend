<template>
  <section class="u-inline-block">
    <div
      v-show="displayedPanel === 'target'"
      @click="showPanel('reports')"
      class="tab a-slideInUp">
      <p v-bind:class="[{ 'u-text-warning': reports.length > 0 }]">
        <c-icon
          v-bind:class="[{ 'a-shake': reports.length > 0 }]"
          icon="bell"
          class="mr-s" />
        <span
          v-text="$t('reports')"
          class="mr-s" />
        <span
          v-text="reports.length"
          class="u-text-small" />
      </p>
    </div>

    <circle-button v-show="displayedPanel === 'reports'" @clicked="showPanel('target')" icon="times" />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('activeRoute', [
      'displayedPanel'
    ]),

    ...mapState('reports', [
      'reports'
    ])
  },

  methods: mapActions('activeRoute', [
    'showPanel'
  ])
}
</script>

<i18n>
{
  "en": {
    "reports": "Reports"
  },
  "fr": {
    "reports": "Rapports"
  },
  "es": {
    "reports": "Informes"
  }
}
</i18n>
