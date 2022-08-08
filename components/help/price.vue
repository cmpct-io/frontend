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
  </div>
</template>

<i18n>
{
  "en": {
    "sectionTitle": "Totally free!",
    "q1": {
      "title": "How do you make money?",
      "answer1": "Cmpct.io is a free service, we don’t run this service to make money therefore we don’t collect and sell your data, or offer premium tiers of service. What you see is what you get, completely free to use."
    },
    "q2": {
      "title": "Can I support the running costs?",
      "answer1": "Yes, it doesn’t cost much to run cmpct.io, but if you use the service a lot and want to support it to keep it running why not consider checking out our Patreon page?",
      "answer2": "Any money we collect through Patreon goes towards the running costs of cmpct.io, such as the Web Servers and bandwidth we use."
    }
  },
  "fr": {
    "sectionTitle": "Complètement gratuit!",
    "q1": {
      "title": "Comment gagnez-vous de l'argent?",
      "answer1": "Cmpct.io est un service gratuit, nous n'exécutons pas ce service pour gagner de l'argent, donc nous ne collectons pas et ne vendons pas vos données, ni n'offrons des niveaux de service premium. Ce que vous voyez est ce que vous obtenez, totalement gratuit."
    },
    "q2": {
      "title": "Puis-je contribuer?",
      "answer1": "Oui, cmpct.io ne coûte pas cher, mais si vous utilisez beaucoup le service et que vous voulez le soutenir pour le faire fonctionner, pourquoi ne pas consulter notre page Patreon?",
      "answer2": "Tout l'argent que nous collectons via Patreon sert à couvrir les coûts de fonctionnement de cmpct.io, tels que les serveurs Web et la bande passante que nous utilisons."
    }
  },
  "es": {
    "sectionTitle": "¡Totalmente libre!",
    "q1": {
      "title": "¿Cómo se gana dinero?",
      "answer1": "Cmpct.io es un servicio gratuito, no ejecutamos este servicio para ganar dinero, por lo tanto, no recopilamos ni vendemos sus datos, ni ofrecemos niveles de servicio premium. Lo que ves es lo que obtienes, completamente gratis."
    },
    "q2": {
      "title": "¿Puedo contribuir?",
      "answer1": "Sí, no cuesta mucho ejecutar cmpct.io, pero si usa mucho el servicio y desea mantenerlo en funcionamiento, ¿por qué no considera visitar nuestra página de Patreon?",
      "answer2": "El dinero que recaudamos a través de Patreon se destina a los costos de funcionamiento de cmpct.io, como los servidores web y el ancho de banda que utilizamos."
    }
  }
}
</i18n>
