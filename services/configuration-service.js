const developmentConfiguration = {
  'apiBaseUrI': 'https://cmpct-api.azurewebsites.net/api',
  'appInsights': '',
  'cdnPath': '',
  'publicPath': ''
}

const productionConfiguration = {
  'apiBaseUrI': 'https://cmpct-api.azurewebsites.net/api',
  'appInsights': '47f10985-4ca6-4031-8093-da011cddeee5',
  'cdnPath': 'https://cdn.cmpct.io',
  'publicPath': 'https://cdn.cmpct.io/_nuxt'
}

const isProduction = process.env.NODE_ENV === 'production'

const API_BASE_URI = isProduction
  ? productionConfiguration.apiBaseUrI
  : developmentConfiguration.apiBaseUrI

const APP_INSIGHTS_KEY = isProduction
  ? productionConfiguration.appInsights
  : developmentConfiguration.appInsights

const CDN_PATH = isProduction
  ? productionConfiguration.cdnPath
  : developmentConfiguration.cdnPath

const PUBLIC_PATH = isProduction
  ? productionConfiguration.publicPath
  : developmentConfiguration.publicPath

const ASSET_PATH = assetName =>
  `${CDN_PATH}${assetName}`

export {
  API_BASE_URI,
  APP_INSIGHTS_KEY,
  CDN_PATH,
  PUBLIC_PATH,
  ASSET_PATH
}
