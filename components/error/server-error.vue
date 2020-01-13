<template>
  <div>
    <h1 v-text="$t('title')" />
    <p v-text="$t('description')" />

    <nuxt-link
      v-text="$t('link')"
      to="/"
      class="square-button with-hover" />
  </div>
</template>

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
  },
  "es": {
    "title": "Huy! Algo salió mal",
    "description": "Parece que nos hemos encontrado con un error y no podemos completar su solicitud ...",
    "link": "Regrese a la página de inicio"
  }
}
</i18n>
