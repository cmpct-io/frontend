<template>
  <section class="u-inline-block">
    <div
      v-show="displayedPanel === 'target'"
      class="tab a-slideInUp"
      @click="ACTIVE_ROUTE_SHOW_PANEL('reports')">
      <p :class="[{ 'u-text-warning': reports.length > 0 }]">
        <c-icon
          :class="[{ 'a-shake': reports.length > 0 }]"
          icon="bell"
          class="mr-s" />
        <span
          class="mr-s"
          v-text="$t('reports')" />
        <span
          class="u-text-small"
          v-text="reports.length" />
      </p>
    </div>

    <shared-circle-button v-show="displayedPanel === 'reports'" icon="times" @clicked="ACTIVE_ROUTE_SHOW_PANEL('target')" />
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ACTIVE_ROUTE_SHOW_PANEL } from '@/store/mutations.constants'

export default {
  computed: {
    ...mapState('activeRoute', [
      'displayedPanel'
    ]),

    ...mapState('reports', [
      'reports'
    ])
  },

  methods: mapMutations('activeRoute', [
    ACTIVE_ROUTE_SHOW_PANEL
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
