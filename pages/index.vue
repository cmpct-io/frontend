<template>
  <div>
    <div v-show="show" class="animated fadeIn">
      <h1 v-text="$t('title')" />
      <p v-text="$t('subtitle')" class="mb" />
      <p v-text="$t('message')" class="mb-l" />
      <generator />
    </div>

    <history v-on:toggled="toggle" />
  </div>
</template>

<script>
import generator from '@/components/routes/route-generator.vue'
import history from '@/components/history/history.vue'
import showMixin from '@/mixins/show-mixin.vue'

export default {
  head () {
    return {
      title: this.$t('pageTitle')
    }
  },
  components: {
    generator,
    history
  },
  mixins: [showMixin],
  created () {
    this.show = true
  }
}
</script>

<i18n>
{
  "en": {
    "pageTitle": "cmpct.io: shorter, safer links",
    "title": "Get started",
    "subtitle": "Create shorter, safer links you can share.",
    "message": "Paste your link into the box below to get started."
  },
  "fr": {
    "pageTitle": "cmpct.io: liens plus courts et plus sûrs",
    "title": "Commencer",
    "subtitle": "Créez des liens plus courts et plus sûrs que vous pouvez partager.",
    "message": "Collez votre lien dans la case ci-dessous pour commencer."
  },
  "es": {
    "pageTitle": "cmpct.io: enlaces más cortos y seguros",
    "title": "Empezar",
    "subtitle": "Crea enlaces más cortos y seguros que puedas compartir.",
    "message": "Pegue su enlace en el cuadro a continuación para comenzar."
  }
}
</i18n>
