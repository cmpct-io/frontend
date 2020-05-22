<template>
  <div
    v-show="displayedPanel === 'reports'"
    class="a-slideInUp">
    <h1 v-text="$t('reports')" />

    <div
      v-show="!isReporting && reports.length > 0"
      class="a-fadeIn">
      <p class="mb-l">
        <span
          v-text="$t('ifYouThink')" />
        <span
          @click="setIsReporting(true)"
          v-text="$t('pleaseReportIt')"
          class="u-text-link" />
      </p>

      <report
        v-for="(item, index) in reports"
        :key="index"
        v-bind="item" />
    </div>

    <p v-show="!isReporting && reports.length === 0">
      <span
        v-text="$t('nobodyHasReported')" />
      <span
        @click="setIsReporting(true)"
        v-text="$t('pleaseReportIfYouThink')"
        class="u-text-link" />
    </p>

    <poster v-show="isReporting" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import report from '@/components/reports/item.vue'
import poster from '@/components/reports/poster.vue'

export default {
  components: {
    report,
    poster
  },

  computed: {
    ...mapState('landing', [
      'routeId',
      'displayedPanel'
    ]),

    ...mapState('reports', [
      'isReporting',
      'reports'
    ])
  },

  methods: mapActions('reports', [
    'submitReport',
    'loadReports',
    'setIsReporting'
  ])
}
</script>

<i18n>
{
  "en": {
    "reports": "Reports",
    "ifYouThink": "If you think this link is unsafe, ",
    "pleaseReportIt": "please report it",
    "nobodyHasReported": "Nobody has reported this link yet, ",
    "pleaseReportIfYouThink": "please report it if you think it is unsafe"
  },
  "fr": {
    "reports": "Rapports",
    "ifYouThink": "Si vous pensez que ce lien n'est pas sûr, ",
    "pleaseReportIt": "veuillez le signaler",
    "nobodyHasReported": "Personne n'a encore signalé ce lien, ",
    "pleaseReportIfYouThink": "veuillez le signaler si vous pensez qu'il est dangereux"
  },
  "es": {
    "reports": "Informes",
    "ifYouThink": "Si crees que este enlace no es seguro, ",
    "pleaseReportIt": "por favor repórtalo",
    "nobodyHasReported": "Nadie ha informado este enlace todavía, ",
    "pleaseReportIfYouThink": "por favor repórtelo si cree que no es seguro"
  }
}
</i18n>
