<template>
  <section class="u-inline-block">
    <div
      v-show="displayedPanel === 'target'"
      @click="showPanel('reports')"
      class="tab slideInUp">
      <p v-bind:class="[{ 'text-warning': reports.length > 0 }]">
        <c-icon
          v-bind:class="[{ 'shake': reports.length > 0 }]"
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
import circleButton from '@/components/shared/circle-button.vue'

export default {
  components: {
    circleButton
  },

  computed: {
    ...mapState('landing', [
      'displayedPanel'
    ]),

    ...mapState('reports', [
      'reports'
    ])
  },

  methods: mapActions('landing', [
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
