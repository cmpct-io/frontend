<template>
  <div class="item flex-container with-hover">
    <font-awesome-icon icon="link" />
    <p class="flex-grow">
      Link URL
    </p>
    <font-awesome-icon icon="chevron-right" class="arrow" />
  </div>
</template>

<style scoped lang="scss">
  .item {
    border: 1px solid white;
    padding: 15px;
    border-radius: 5px;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: left;

    svg {
      margin-right: 10px;
      transition: all 0.2s ease-in-out;
    }

    p {
      margin-bottom: 0;
    }

    &:hover {
      svg.arrow {
        margin-right: 0;
      }
    }
  }
</style>
