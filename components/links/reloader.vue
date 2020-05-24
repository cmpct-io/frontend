<template>
  <p
    v-if="!isProcessed"
    class="mb-l">
    <c-icon
      icon="spinner"
      class="fa-spin fa-fw mr-s" />

    <span
      v-text="$t('scanning')" />
  </p>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      interval: null,
      intervalCount: 0
    }
  },

  computed: mapGetters('activeRoute', [
    'isProcessed'
  ]),

  mounted () {
    this.interval = setInterval(() => {
      this.reload()
      this.intervalCount++

      if (this.intervalCount === 10) {
        clearInterval(this.interval)
      }
    }, 7500)
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: mapActions('activeRoute', [
    'reload'
  ])
}
</script>

<i18n>
{
  "en": {
    "scanning": "Scanning the links for details, we will refresh automatically."
  },
  "fr": {
    "scanning": "En parcourant les liens pour plus de détails, nous actualiserons automatiquement.."
  },
  "es": {
    "scanning": "Al escanear los enlaces para obtener detalles, actualizaremos automáticamente.."
  }
}
</i18n>
