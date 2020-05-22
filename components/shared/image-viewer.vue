<template>
  <container v-if="show" @click="hideViewer" class="c-image-viewer">
    <div class="c-image-viewer-inner fadeIn">
      <h3 v-text="pageTitle" class="header mb-s" />
      <img :src="imageUrl" class="u-border" alt="Screenshot">
    </div>

    <circle-button @clicked="hideViewer()" icon="times" />
  </container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import container from '@/components/shared/container.vue'
import circleButton from '@/components/shared/circle-button.vue'

export default {
  components: {
    container,
    circleButton
  },

  computed: mapState('viewer', [
    'show',
    'imageUrl',
    'pageTitle'
  ]),

  watch: {
    $route (to, from) {
      setTimeout(() => {
        this.hideViewer()
      }, 300)
    }
  },

  methods: mapActions('viewer', [
    'hideViewer'
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
