<template>
  <div>
    <form
      v-on:submit.prevent="submit"
      class="box animated shake">
      <input
        v-model="password"
        :placeholder="$t('placeholder')"
        type="password"
        required>
      <button
        class="no-button"
        type="submit">
        <c-icon
          :title="$t('submitInfo')"
          icon="chevron-circle-right" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import randomiser from '@/services/randomiser.js'

export default {
  data () {
    return {
      password: ''
    }
  },
  methods: {
    ...mapActions('landing', [
      'setPassword'
    ]),
    submit () {
      this.setPassword(this.password)

      const uniqueKey = randomiser.generateRandomNumber(1000, 1)
      this.$router.push(`${this.$route.path}#${uniqueKey}`)
    }
  }
}
</script>

<style scoped lang="scss">
  input {
    background-color: transparent;
    padding: 20px 30px;
    border: 0;
    font-size: 1rem;
    color: white;
    outline: 0;
    width: 100%;
    flex-grow: 1;
  }

  button.no-button {
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    color: white;
    cursor: pointer;
  }
</style>

<i18n>
{
  "en": {
    "placeholder": "Password...",
    "submitInfo": "Verify your password"
  },
  "fr": {
    "placeholder": "Mot de passe...",
    "submitInfo": "Vérifiez votre mot de passe"
  },
  "es": {
    "placeholder": "Contraseña...",
    "submitInfo": "Verifica tu contraseña"
  }
}
</i18n>
