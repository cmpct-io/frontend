<template>
  <standard-container>
    <div class="panel-main">
      <h4>Visit</h4>
    </div>
    <div class="panel-side">
      <h4>Comments</h4>
    </div>
  </standard-container>
</template>

<script>
import standardContainer from '@/components/layout/container-standard.vue'

export default {
  components: {
    standardContainer
  }
}
</script>

<style scoped>
  .panel-main {
    display: inline-block;
    width: 75%;
    padding: 30px;
  }

  .panel-side {
    display: inline-block;
    width: 20%;
  }
</style>
