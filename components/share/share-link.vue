<template>
  <div class="share" title="Click to copy">
    <p v-text="link" />
    <font-awesome-icon icon="copy" />
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .share {
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    border: 1px dashed white;
    border-radius: 5px;
    max-width: 500px;
    padding: 10px 20px;
    margin: 0 auto;
    text-align: left;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
      background-color: #660066;
    }

    p {
      margin-bottom: 0;
      font-size: 1.25rem;
      flex-grow: 1;
    }
  }
</style>
