<template>
  <section class="history">
    <div v-show="!show" class="history-link" title="View history">
      <div @click="toggle" class="button with-hover">
        <font-awesome-icon icon="chevron-up" />
      </div>
    </div>

    <div v-show="show" class="history-content animated slideInUp">
        <h1>
          <span>Your history</span>
          <font-awesome-icon @click="toggle" icon="times" />
        </h1>
      <p>These are the links you have generated or visited recently</p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
      this.$emit('toggled', this.show)
    }
  }
}
</script>

<style scoped lang="scss">
  .history-link {
    position: fixed;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;

    .button {
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 1px solid white;
      font-size: 1rem;
      cursor: pointer;
      margin: 0 auto;
      border-radius: 50%;

        svg {
          margin-top: 13px;
        }
    }
  }
</style>
