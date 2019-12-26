<template>
  <div class="drawer">
    <p>
      <font-awesome-icon icon="bell" class="mr" />
      <span class="mr">Reports</span>
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
