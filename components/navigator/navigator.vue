<template>
  <section class="navigator">
    <logo />

    <div class="links">
      <router-link to="help">
        <font-awesome-icon icon="question" />
        <span>Help</span>
      </router-link>
    </div>
  </section>
</template>

<script>
import logo from '@/components/navigator/logo.vue'

export default {
  components: {
    logo
  }
}
</script>

<style scoped lang="scss">
  section.navigator {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 5px 20px;
    color: white;
    z-index: 50;

    .links {
      float: right;
      padding: 10px;

      a {
        color: white;
        margin: 0 5px;
        text-decoration: none;
      }
    }
  }
</style>
