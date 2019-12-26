<template>
  <div class="drawer">
    <p>
      <font-awesome-icon icon="comment-alt" class="mr" />
      <span class="mr">Comments</span>
      <badge text="0" />
    </p>
  </div>
</template>

<script>
import badge from '@/components/layout/badge.vue'

export default {
  components: {
    badge
  }
}
</script>
