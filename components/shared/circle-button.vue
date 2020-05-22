<template>
  <button @click="click" class="c-circle-button u-hover a-slideInDown">
    <c-icon :icon="icon" />
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'times'
    }
  },

  methods: {
    click () {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped lang="scss">
.c-circle-button {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 50%;
  margin-bottom: 30px;
  padding: 0;

  .light & {
    border: 1px solid black;
  }
}
</style>
