<template>
  <div>
    <div v-show="show" class="animated fadeIn">
      <h1
        v-text="$t('title')" />
      <p
        v-text="$t('subtitle')"
        class="mb" />
      <p
        v-text="$t('message')"
        class="mb-l" />

      <link-input />
      <link-group />
    </div>

    <history v-on:toggled="toggle" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import showMixin from '@/mixins/show-mixin.vue'
import linkInput from '@/components/generator/input.vue'
import linkGroup from '@/components/generator/group.vue'
import history from '@/components/history/history.vue'

export default {
  head () {
    return {
      title: this.$t('pageTitle')
    }
  },
  components: {
    linkInput,
    linkGroup,
    history
  },
  mixins: [showMixin],
  computed: {
    ...mapState('generator', [
      'links'
    ])
  },
  created () {
    this.show = true
    this.reset()
  },
  methods: {
    ...mapActions('generator', [
      'reset'
    ])
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
