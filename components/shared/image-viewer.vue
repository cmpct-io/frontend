<template>
  <div v-if="show" @click="hideViewer" class="wrapper">
    <h3 class="header flex-container mb-s">
      <span
        v-text="pageTitle"
        class="flex-grow" />
      <c-icon
        icon="times"
        class="fa-fw cursor-pointer" />
    </h3>

    <div class="image-viewer with-border">
      <img :src="imageUrl">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('viewer', [
      'show',
      'imageUrl',
      'pageTitle'
    ])
  },
  methods: {
    ...mapActions('viewer', [
      'hideViewer'
    ])
  }
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
}

.image-viewer {
  position: fixed;
  top: 125px;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 85%;
  }

  img {
    width: 100%;
  }
}
</style>
