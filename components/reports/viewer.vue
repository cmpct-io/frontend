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
          class="u-text-link"
          @click="REPORTS_SET_IS_REPORTING(true)"
          v-text="$t('pleaseReportIt')" />
      </p>

      <reports-item
        v-for="(item, index) in reports"
        :key="index"
        v-bind="item" />
    </div>

    <p v-show="!isReporting && reports.length === 0">
      <span
        v-text="$t('nobodyHasReported')" />
      <span
        class="u-text-link"
        @click="REPORTS_SET_IS_REPORTING(true)"
        v-text="$t('pleaseReportIfYouThink')" />
    </p>

    <reports-poster v-show="isReporting" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { REPORTS_SET_IS_REPORTING } from '@/store/mutations.constants'

export default {
  computed: {
    ...mapState('activeRoute', [
      'routeId',
      'displayedPanel'
    ]),

    ...mapState('reports', [
      'isReporting',
      'reports'
    ])
  },

  methods: {
    ...mapActions('reports', [
      'submitReport',
      'loadReports'
    ]),

    ...mapMutations('reports', [
      REPORTS_SET_IS_REPORTING
    ])
  }
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
