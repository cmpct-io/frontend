<template>
  <section class="navigator">
    <logo />

    <div class="links">
      <router-link to="help">
        <c-icon icon="question" />
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
    padding: 20px 30px;
    color: white;
    z-index: 50;
    user-select: none;

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
