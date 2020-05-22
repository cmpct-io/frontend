<template>
  <div class="report u-standard-width u-flex-container u-border mb-m">
    <c-icon icon="user-circle" class="fa-fw mr" />
    <div class="content u-flex-grow">
      <p v-text="name" class="bold" />
      <p v-text="reportTypeString" />
    </div>
  </div>
</template>

<script>
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
      return this.$t(`type_${this.reportType}`)
    }
  }
}
</script>

<style scoped lang="scss">
  .report {
    padding: 10px;

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

<i18n>
{
  "en": {
    "type_0": "Scam",
    "type_1": "Dead Link",
    "type_2": "Insecure",
    "type_3": "Phishing (Fake)"
  },
  "fr": {
    "type_0": "Arnaque",
    "type_1": "Lien mort",
    "type_2": "Peu sûr",
    "type_3": "Phishing (faux)"
  },
  "es": {
    "type_0": "Estafa",
    "type_1": "Enlace muerto",
    "type_2": "Inseguro",
    "type_3": "Phishing (falso)"
  }
}
</i18n>
