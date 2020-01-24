<template>
  <form
    @submit.prevent="addComment"
    class="standard-width animated fadeIn">
    <p
      v-text="$t('description')"
      class="mb-l" />
    <input
      v-model="name"
      :placeholder="$t('namePlaceholder')"
      required>
    <textarea
      v-model="commentText"
      :placeholder="$t('commentPlaceholder')"
      required />

    <button
      v-text="$t('add')"
      class="with-hover"
      type="submit" />
    <button
      @click="setIsCommenting(false)"
      v-text="$t('cancel')"
      class="with-hover"
      type="button" />
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      name: '',
      commentText: ''
    }
  },
  computed: {
    ...mapState('landing', [
      'routeId'
    ])
  },
  methods: {
    ...mapActions('comments', [
      'loadComments',
      'submitComment',
      'setIsCommenting'
    ]),
    async addComment () {
      await this.submitComment({
        routeId: this.routeId,
        name: this.name,
        commentText: this.commentText
      })

      this.commentText = ''
      await this.loadComments(this.routeId)
    }
  }
}
</script>

<style scoped lang="scss">
  input, textarea {
    width: 100%;
    margin-bottom: 10px;
    background-color: transparent;
    border: 1px solid white;
    padding: 10px 20px;
    color: white;
    font-size: 1rem;
    border-radius: 5px;

    .light & {
      border: 1px solid black;
      color: black;
    }
  }
</style>

<i18n>
{
  "en": {
    "description": "Let people know what you think about this link",
    "namePlaceholder": "Your name...",
    "commentPlaceholder": "Your comment...",
    "add": "Add",
    "cancel": "Cancel"
  },
  "fr": {
    "description": "Faites savoir ce que vous pensez de ce lien",
    "namePlaceholder": "Votre nom...",
    "commentPlaceholder": "Votre commentaire...",
    "add": "Ajouter",
    "cancel": "Annuler"
  },
  "es": {
    "description": "Deje que la gente sepa lo que piensa sobre este enlace",
    "namePlaceholder": "Tu nombre...",
    "commentPlaceholder": "Tu comentario...",
    "add": "Añadir",
    "cancel": "Cancelar"
  }
}
</i18n>
