<template>
  <shared-container v-if="show" class="c-image-viewer">
    <div class="c-image-viewer-inner a-fadeIn">
      <h3 class="header mb-s" v-text="pageTitle" />
      <img :src="imageUrl" class="u-border" alt="Screenshot">
    </div>

    <shared-circle-button icon="times" @clicked="IMAGE_VIEWER_HIDE()" />
  </shared-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { IMAGE_VIEWER_HIDE } from '@/store/mutations.constants'

export default {
  computed: mapState('imageViewer', [
    'show',
    'imageUrl',
    'pageTitle'
  ]),

  beforeDestroy () {
    this.IMAGE_VIEWER_HIDE()
  },

  methods: mapMutations('imageViewer', [
    IMAGE_VIEWER_HIDE
  ])
}
</script>

<style scoped lang="scss">
.c-image-viewer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 50;
  padding: 20px;
  background-color: black;

  .light & {
    background-color: white;
  }

  .header {
    text-align: left;
    padding: 10px;
  }
}

.c-image-viewer-inner {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 98%;
  }

  img {
    width: 100%;
  }
}
</style>
