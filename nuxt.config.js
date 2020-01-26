
import { APP_INSIGHTS_KEY } from './services/configuration-service.js'

export default {
  mode: 'universal',
  head: {
    title: 'cmpct: the safer link shorterner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'theme-color', content: '#000000' },
      { name: 'google-site-verification', content: 'Zih5ZaiWwv-IozG3zKriVzfzz9ZjMZ-OgoFraU0sABY' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Tomorrow&display=swap' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'animate.css/animate.min.css'
  ],
  plugins: [
    '~/plugins/fontawesome.plugin.js'
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/applicationinsights',
    ['nuxt-i18n', {
      vueI18nLoader: true,
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true
      }
    }],
    ['cookie-universal-nuxt']
  ],
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
      }
    }
  },
  appInsights: {
    instrumentationKey: APP_INSIGHTS_KEY
  },
  axios: {
  },
  build: {
    publicPath: 'https://cmpct.azureedge.net/_nuxt',
    extend (config, ctx) {
    }
  },
  server: {
    host: '0.0.0.0'
  },
  manifest: {
    name: 'cmpct.io',
    short_name: 'cmpct.io',
    description: 'The better way to shorten long links',
    lang: 'en',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000'
  }
}
