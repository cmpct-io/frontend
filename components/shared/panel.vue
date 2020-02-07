<template>
  <div class="panel with-border">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.panel {
  position: absolute;
  background-color: black;
  padding: 15px;
  width: 300px;
  top: 0;
  right: 0px;

  @media (max-width: 768px) {
    width: 225px;
  }

  .light & {
    background-color: white;
  }
}
</style>
