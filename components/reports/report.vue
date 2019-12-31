<template>
  <div class="report flex-container">
    <c-icon icon="user-circle" class="fa-fw mr" />
    <div class="content flex-grow">
      <p v-text="name" class="bold" />
      <p v-text="reportTypeString" />
    </div>
  </div>
</template>

<script>
import reportTypes from '@/services/report-types.js'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    reportType: {
      type: Number,
      required: true
    }
  },
  computed: {
    reportTypeString () {
      return `Reason: ${reportTypes.getReportType(this.reportType)}`
    }
  }
}
</script>

<style scoped lang="scss">
  .report {
    width: 500px;
    max-width: 95%;
    margin: 0 auto;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;

    svg {
      font-size: 2rem;
    }

    .content {
      text-align: left;

      p {
        margin: 0;
      }
    }
  }
</style>
