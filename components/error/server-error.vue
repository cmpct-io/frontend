<template>
  <div class="server-error">
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
    "description": "We seem to have run into an error and can't complete your request...",
    "link": "Go back to the Homepage"
  },
  "fr": {
    "title": "Oups, quelque chose s'est mal passé",
    "description": "Il semble que nous ayons rencontré une erreur et ne pouvons pas répondre à votre demande ...",
    "link": "Retournez à la page d'accueil"
  }
}
</i18n>
