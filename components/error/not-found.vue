<template>
  <div class="not-found">
    <h1 v-text="$t('title')" />
    <p v-text="$t('description')" class="mb" />
    <nuxt-link v-text="$t('link')" to="/" class="square-button with-hover" />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
p {
  margin-bottom: 30px;
}
</style>

<i18n>
{
  "en": {
    "title": "Oops something went wrong",
    "description": "We can't find the page you are looking for...",
    "link": "Go back to the Homepage"
  },
  "fr": {
    "title": "Oups, quelque chose s'est mal passé",
    "description": "Nous ne trouvons pas la page que vous recherchez ...",
    "link": "Retournez à la page d'accueil"
  }
}
</i18n>
