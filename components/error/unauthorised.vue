<template>
  <div>
    <h1 v-text="$t('title')" />
    <p v-text="$t('description')" class="mb-l" />
    <route-password />
  </div>
</template>

<script>
import routePassword from '@/components/routes/route-password.vue'

export default {
  components: {
    routePassword
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Password Protected",
    "description": "The link you accessed is password protected, please enter the password below."
  },
  "fr": {
    "title": "Protégé par mot de passe",
    "description": "Le lien auquel vous avez accédé est protégé par mot de passe, veuillez saisir le mot de passe ci-dessous."
  },
  "es": {
    "title": "Contraseña protegida",
    "description": "El enlace al que accedió está protegido con contraseña, ingrese la contraseña a continuación."
  }
}
</i18n>
