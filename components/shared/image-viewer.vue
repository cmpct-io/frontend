<template>
  <div v-if="show" @click="hideViewer" class="wrapper">
    <container>
      <div class="image-viewer fadeIn">
        <h3
          v-text="pageTitle"
          class="header mb-s" />

        <img
          :src="imageUrl"
          class="with-border"
          alt="Screenshot">
      </div>

      <div class="circle-button with-hover slideInDown">
        <c-icon icon="times" />
      </div>
    </container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import container from '@/components/shared/container.vue'

export default {
  components: {
    container
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
.wrapper {
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

.image-viewer {
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
