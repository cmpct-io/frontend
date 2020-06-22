
import { PUBLIC_PATH, APP_INSIGHTS_KEY } from './services/configuration-service.js'

export default {
  appInsights: {
    instrumentationKey: APP_INSIGHTS_KEY
  },

  build: {
    publicPath: PUBLIC_PATH,
    extend (config, ctx) {
    }
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
    '@nuxt/components'
  ],

  components: [
    '~/components',
    { path: '~/components/history/', prefix: 'history' },
    { path: '~/components/comments/', prefix: 'comments' },
    { path: '~/components/reports/', prefix: 'reports' },
    { path: '~/components/links/', prefix: 'links' }
  ],

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  head: {
    title: 'cmpct.io | Free Custom URL Shortener for Safer, Shorter Links',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'cmpct.io | Free Custom URL shortener | Create safer, better links you can share' },
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
      description: `Create shorter, safer & better links that you can share with cmpct - the free custom URL shortener that lets you see where you're going before you click.`,
      lang: 'en',
      display: 'standalone',
      start_url: 'https://cmpct.io',
      background_color: '#000000',
      theme_color: '#000000'
    }
  },

  robots: () => {
    return {
      UserAgent: '*',
      Allow: '/',
      Sitemap: 'https://cmpct.io/sitemap.xml'
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
  }
}
