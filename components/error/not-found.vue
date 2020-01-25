<template>
  <div>
    <h1
      v-text="$t('title')" />
    <p
      v-text="$t('description')" />

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
    "description": "We can't find the page you are looking for...",
    "link": "Go back to the Homepage"
  },
  "fr": {
    "title": "Oups, quelque chose s'est mal passé",
    "description": "Nous ne trouvons pas la page que vous recherchez ...",
    "link": "Retournez à la page d'accueil"
  },
  "es": {
    "title": "Huy! Algo salió mal",
    "description": "No podemos encontrar la página que estás buscando ...",
    "link": "Regrese a la página de inicio"
  }
}
</i18n>
