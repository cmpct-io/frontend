<template>
  <form
    class="u-standard-width a-fadeIn"
    @submit.prevent="addComment">
    <p
      class="mb-l"
      v-text="$t('description')" />

    <input
      v-model="name"
      :placeholder="$t('namePlaceholder')"
      class="u-border mb-m"
      required>

    <textarea
      v-model="commentText"
      :placeholder="$t('commentPlaceholder')"
      class="u-border mb-m"
      required />

    <button
      class="u-hover"
      type="submit"
      v-text="$t('add')" />

    <button
      class="u-hover"
      type="button"
      @click="COMMENTS_SET_IS_COMMENTING(false)"
      v-text="$t('cancel')" />
  </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { COMMENTS_SET_IS_COMMENTING } from '@/store/mutations.constants'

export default {
  data () {
    return {
      name: '',
      commentText: ''
    }
  },

  computed: mapState('activeRoute', [
    'routeId'
  ]),

  methods: {
    ...mapActions('comments', [
      'loadComments',
      'submitComment'
    ]),

    ...mapMutations('comments', [
      COMMENTS_SET_IS_COMMENTING
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
