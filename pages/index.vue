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
import generator from '@/components/generator/generator.vue'
import history from '@/components/history/history.vue'
import showMixin from '@/mixins/show-mixin.vue'

export default {
  head () {
    return {
      title: `cmpct.io: shorter, safer links`
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
    "title": "Get started",
    "subtitle": "Create shorter, safer links you can share.",
    "message": "Paste your link into the box below to get started."
  },
  "fr": {
    "title": "Commencer",
    "subtitle": "Créez des liens plus courts et plus sûrs que vous pouvez partager.",
    "message": "Collez votre lien dans la case ci-dessous pour commencer."
  },
  "es": {
    "title": "Empezar",
    "subtitle": "Crea enlaces más cortos y seguros que puedas compartir.",
    "message": "Pegue su enlace en el cuadro a continuación para comenzar."
  }
}
</i18n>
