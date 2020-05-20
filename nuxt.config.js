
import { APP_INSIGHTS_KEY } from './services/configuration-service.js'

export default {
  appInsights: {
    instrumentationKey: APP_INSIGHTS_KEY
  },

  build: {
    publicPath: 'https://cdn.cmpct.io/_nuxt',
    extend (config, ctx) {
    }
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa'
  ],

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  head: {
    title: 'cmpct.io: shorter, safer links',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'cmpct.io: shorter, safer links' },
      { name: 'theme-color', content: '#000000' },
      { name: 'google-site-verification', content: 'Zih5ZaiWwv-IozG3zKriVzfzz9ZjMZ-OgoFraU0sABY' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
      }
    }
  },

  loading: { color: '#fff' },

  mode: 'universal',

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/applicationinsights',
    '@nuxtjs/robots',
    'nuxt-webfontloader',
    ['nuxt-i18n', {
      vueI18nLoader: true,
      strategy: 'no_prefix',
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true
      }
    }],
    ['cookie-universal-nuxt'],
    '@nuxtjs/sitemap'
  ],

  plugins: [
    '~/plugins/fontawesome.plugin.js'
  ],

  pwa: {
    manifest: {
      name: 'cmpct.io',
      short_name: 'cmpct.io',
      description: 'Create shorter, safer, better links you can share',
      lang: 'en',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#000000'
    }
  },

  server: {
    host: '0.0.0.0'
  },

  sitemap: {
    hostname: 'https://cmpct.io'
  },

  webfontloader: {
    google: {
      families: ['Tomorrow:400,400&display=swap']
    }
  },
}
