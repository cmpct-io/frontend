<template>
  <a
    :href="qualifiedTarget"
    @click="track"
    :target="targetValue"
    :title="title"
    class="box flex-container with-border with-hover mb-m">
    <link-favicon :target="target" />
    <div class="link-inner flex-grow">
      <p
        v-if="title"
        v-text="title"
        class="mb" />
      <p
        v-text="target"
        v-bind:class="{ 'text-small' : title }"
        class="break-word" />
    </div>
    <div
      v-if="screenshotImageUrl"
      @click.prevent="showScreenshot"
      :title="$t('viewSecurePicture')">
      <c-icon
        icon="image" />
    </div>
    <c-icon
      icon="chevron-right"
      class="mr-m" />
  </a>
</template>

<script>
import { mapActions } from 'vuex'
import { TRACK_EVENT } from '@/services/analytics-service.js'
import { CDN_PATH } from '@/services/configuration-service.js'
import linkFavicon from '@/components/links/link-favicon.vue'

export default {
  components: {
    linkFavicon
  },

  props: {
    target: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    screenshotFileName: {
      type: String,
      default: ''
    },
    newPage: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    qualifiedTarget () {
      return this.target.toLowerCase().startsWith('http')
        ? this.target
        : `https://${this.target}`
    },

    targetValue () {
      return this.newPage
        ? 'blank'
        : ''
    },

    screenshotImageUrl () {
      return this.screenshotFileName
        ? `${CDN_PATH}/screenshots/${this.screenshotFileName}`
        : ''
    }
  },

  methods: {
    ...mapActions('viewer', [
      'showViewer'
    ]),

    track () {
      TRACK_EVENT(this, 'feature/link/interact', `Link: ${this.qualifiedTarget}`)
    },

    showScreenshot () {
      this.showViewer({
        imageUrl: this.screenshotImageUrl,
        pageTitle: this.title
      })

      TRACK_EVENT(this, 'feature/screenshot/viewed', `Image: ${this.screenshotImageUrl}`)
    }
  }
}
</script>

<style scoped>
.link-inner {
  padding: 20px 20px;
}
</style>

<i18n>
{
  "en": {
    "viewSecurePicture": "View a secure picture"
  },
  "fr": {
    "viewSecurePicture": "Afficher une image sécurisée"
  },
  "es": {
    "viewSecurePicture": "Ver una imagen segura"
  }
}
</i18n>
