<template>
  <div class="help-section">
    <h4 v-text="$t('sectionTitle')" class="help-title mb-m" />
    <shared-spoiler :title="$t('q1.title')">
      <p v-text="$t('q1.answer1')" />
    </shared-spoiler>
    <shared-spoiler :title="$t('q2.title')">
      <p v-text="$t('q2.answer1')" />
      <p v-text="$t('q2.answer2')" />
    </shared-spoiler>
    <shared-spoiler :title="$t('q3.title')">
      <p v-text="$t('q3.answer1')" />
    </shared-spoiler>
    <shared-spoiler :title="$t('q4.title')">
      <p v-text="$t('q4.answer1')" />
    </shared-spoiler>
  </div>
</template>

<i18n>
{
  "en": {
    "sectionTitle": "About cmpct.io",
    "q1": {
      "title": "What is cmpct?",
      "answer1": "Cmpct.io is a free online service that makes your links shorter. It works differently to other link shortening services by giving you enhanced security and protects your privacy. Read on to learn about why our features make us better."
    },
    "q2": {
      "title": "Why use cmpct.io?",
      "answer1": "Cmpct is the safest link shortener because it doesn’t redirect users to the original page right away, first it presents them with a landing page that shows them where they will end up. Users can add comments and reports to links to let other people know whether it is unsafe.",
      "answer2": "That means you can always trust a link to cmpct.io, and when you need to share something; cmpct.io has you covered for free."
    },
    "q3": {
      "title": "Install on your mobile device!",
      "answer1": "Did you know cmpct.io is a progressive web app? That means we can do some of the cool things that a native mobile phone app can do, you can install cmpct.io on your phone to benefit from some of these cool new features."
    },
    "q4": {
      "title": "How long does my data last?",
      "answer1": "When you generate a link, it will continue to work for at least 180 days, we may later choose to make this permanent. But currently have decided upon half a year. Therefore cmpct.io shouldn't be used for permanent links/redirects but is great for sharing."
    }
  },
  "fr": {
    "sectionTitle": "À propos de cmpct.io",
    "q1": {
      "title": "Qu'est-ce que cmpct.io?",
      "answer1": "Cmpct.io est un service en ligne gratuit qui raccourcit vos liens. Il fonctionne différemment des autres services de raccourcissement de liens en vous offrant une sécurité renforcée et protège votre vie privée. Lisez la suite pour savoir pourquoi nos fonctionnalités nous améliorent."
    },
    "q2": {
      "title": "Pourquoi utiliser cmpct.io?",
      "answer1": "cmpct.io est le raccourcisseur de liens le plus sûr, car il ne redirige pas immédiatement les utilisateurs vers la page d'origine, il leur présente d'abord une page de destination qui leur indique où ils finiront. Les utilisateurs peuvent ajouter des commentaires et des rapports aux liens pour faire savoir à d'autres personnes si cela n'est pas sûr.",
      "answer2": "Cela signifie que vous pouvez toujours faire confiance à un lien vers cmpct.io et lorsque vous devez partager quelque chose; cmpct.io vous couvre gratuitement."
    },
    "q3": {
      "title": "Installez sur votre appareil mobile!",
      "answer1": "Saviez-vous que cmpct.io est une application Web progressive? Cela signifie que nous pouvons faire certaines des choses intéressantes qu'une application de téléphonie mobile native peut faire, vous pouvez installer cmpct.io sur votre téléphone pour bénéficier de certaines de ces nouvelles fonctionnalités intéressantes."
    },
    "q4": {
      "title": "Combien de temps durent les données?",
      "answer1": "Lorsque vous générez un lien, il continuera à fonctionner pendant au moins 180 jours, nous pourrons ultérieurement choisir de le rendre permanent. Mais ont actuellement décidé d'un semestre. Par conséquent, cmpct.io ne doit pas être utilisé pour les liens / redirections permanents mais est idéal pour le partage."
    }
  },
  "es": {
    "sectionTitle": "Sobre cmpct.io",
    "q1": {
      "title": "¿Qué es cmpct?",
      "answer1": "Cmpct.io es un servicio gratuito en línea que acorta sus enlaces. Funciona de manera diferente a otros servicios de acortamiento de enlaces al brindarle una mayor seguridad y proteger su privacidad. Siga leyendo para saber por qué nuestras características nos hacen mejores."
    },
    "q2": {
      "title": "¿Por qué usar cmpct.io?",
      "answer1": "Cmpct es el acortador de enlaces más seguro porque no redirige a los usuarios a la página original de inmediato, primero les presenta una página de destino que les muestra dónde terminarán. Los usuarios pueden agregar comentarios e informes a los enlaces para que otras personas sepan si no es seguro.",
      "answer2": "Eso significa que siempre puede confiar en un enlace a cmpct.io y cuando necesita compartir algo; cmpct.io lo tiene cubierto gratis."
    },
    "q3": {
      "title": "Instalar en su dispositivo móvil!",
      "answer1": "¿Sabía que cmpct.io es una aplicación web progresiva? Eso significa que podemos hacer algunas de las cosas geniales que puede hacer una aplicación nativa de teléfono móvil, puede instalar cmpct.io en su teléfono para beneficiarse de algunas de estas nuevas funciones."
    },
    "q4": {
      "title": "¿Cuánto duran mis datos?",
      "answer1": "Cuando genere un enlace, continuará funcionando durante al menos 180 días, luego podremos optar por hacerlo permanente. Pero actualmente han decidido medio año. Por lo tanto, cmpct.io no debe usarse para enlaces / redireccionamientos permanentes, pero es ideal para compartir."
    }
  }
}
</i18n>
