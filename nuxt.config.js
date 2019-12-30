
export default {
  mode: 'universal',
  head: {
    title: 'cmpct: The safer link shorterner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'theme-color', content: '#000000' }
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
    '~/plugins/fontawesome.plugin.js',
    '~/plugins/helper-components.js'
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  },
  server: {
    host: '0.0.0.0'
  },
  manifest: {
    name: 'cmpct',
    short_name: 'cmpct',
    description: 'The better way to shorten long links',
    lang: 'en',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000'
  }
}
