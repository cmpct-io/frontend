<template>
  <div>
    <h1
      v-text="$t('title')" />
    <p
      v-text="$t('subtitle')"
      class="mb" />
    <p
      v-text="$t('message')"
      class="mb-l" />

    <generator />
    <group-wrapper />

    <tabs>
      <history-trigger />
      <learn-more-trigger />
    </tabs>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Custom URL Shortener",
    "subtitle": "Create free shorter and safer links you can share.",
    "message": "Paste your link into the box below to get started."
  },
  "fr": {
    "title": "Commencer",
    "subtitle": "Créez gratuitement des liens plus courts et plus sûrs que vous pouvez partager.",
    "message": "Collez votre lien dans la case ci-dessous pour commencer."
  },
  "es": {
    "title": "Empezar",
    "subtitle": "Cree enlaces gratuitos más cortos y seguros que pueda compartir.",
    "message": "Pegue su enlace en el cuadro a continuación para comenzar."
  }
}
</i18n>
