<template>
  <div>
    <h1 v-text="$t('title')" />
    <p v-text="$t('description')" class="mb-l" />
    <render-shortcut v-if="shortcut" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import renderShortcut from '@/components/routes/render-shortcut.vue'

export default {
  head () {
    return {
      title: this.$t('pageTitle')
    }
  },
  components: {
    renderShortcut
  },
  computed: {
    ...mapState('generator', [
      'shortcut'
    ])
  },
  created () {
    if (!this.shortcut) {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<i18n>
{
  "en": {
    "pageTitle": "cmpct.io: Share",
    "title": "Ready to Share",
    "description": "You can share your link now, simply click the box below to copy it."
  },
  "fr": {
    "pageTitle": "cmpct.io: Partager",
    "title": "Prêt à partager",
    "description": "Vous pouvez partager votre lien maintenant, cliquez simplement sur la case ci-dessous pour le copier."
  },
  "es": {
    "pageTitle": "cmpct.io: Compartir",
    "title": "Listo para compartir",
    "description": "Puede compartir su enlace ahora, simplemente haga clic en el cuadro a continuación para copiarlo."
  }
}
</i18n>
