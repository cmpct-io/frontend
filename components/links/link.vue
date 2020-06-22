<template>
  <a
    :href="target"
    @click="track"
    :target="targetValue"
    :title="title"
    class="c-box u-flex-container u-border u-hover mb-m">
    <links-link-favicon :target="target" />
    <div class="link-inner u-flex-grow">
      <p
        v-if="title"
        v-text="title"
        class="mb" />
      <p
        v-text="target"
        v-bind:class="{ 'u-text-small' : title }"
        class="u-break-word" />
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
      class="u-hidden-mobile mr" />
  </a>
</template>

<script>
import { mapMutations } from 'vuex'
import { TRACK_EVENT } from '@/services/analytics-service.js'
import { STORAGE_PATH } from '@/services/configuration-service.js'
import { IMAGE_VIEWER_SHOW } from '@/store/mutations.constants'

export default {
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
    targetValue () {
      return this.newPage
        ? 'blank'
        : ''
    },

    screenshotImageUrl () {
      return this.screenshotFileName
        ? `${STORAGE_PATH}/screenshots/${this.screenshotFileName}`
        : ''
    }
  },

  methods: {
    ...mapMutations('imageViewer', [
      IMAGE_VIEWER_SHOW
    ]),

    track () {
      TRACK_EVENT(this, 'feature/link/interact', `Link: ${this.target}`)
    },

    showScreenshot () {
      this.IMAGE_VIEWER_SHOW({
        imageUrl: this.screenshotImageUrl,
        pageTitle: this.title
      })

      TRACK_EVENT(this, 'feature/screenshot/viewed', `Image: ${this.screenshotImageUrl}`)
    }
  }
}
</script>

<style scoped lang="scss">
.link-inner {
  padding: 20px;

  @media (max-width: 767px) {
    padding: 15px;
  }
}

svg {
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
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
