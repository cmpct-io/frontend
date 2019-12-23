<template>
  <div class="share with-hover" title="Click to copy">
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
    display: inline-block;
    border: 1px dashed white;
    border-radius: 5px;
    margin: 0 auto;
    width: 90%;
    max-width: 800px;
    color: white;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-bottom: 20px;

    p {
      margin-bottom: 0;
      font-size: 1.25rem;
      flex-grow: 1;
    }
  }
</style>
