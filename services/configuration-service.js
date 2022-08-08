const developmentConfiguration = {
  apiBaseUrI: 'https://cmpct-api.azurewebsites.net/api',
  cdnPath: '',
  storagePath: 'https://cmpct.blob.core.windows.net',
  publicPath: ''
}

const productionConfiguration = {
  apiBaseUrI: 'https://cmpct-api.azurewebsites.net/api',
  cdnPath: 'https://cdn.cmpct.io',
  storagePath: 'https://cmpct.blob.core.windows.net',
  publicPath: 'https://cdn.cmpct.io/_nuxt'
}

const isProduction = process.env.NODE_ENV === 'production'

const API_BASE_URI = isProduction
  ? productionConfiguration.apiBaseUrI
  : developmentConfiguration.apiBaseUrI

const CDN_PATH = isProduction
  ? productionConfiguration.cdnPath
  : developmentConfiguration.cdnPath

const STORAGE_PATH = isProduction
  ? productionConfiguration.storagePath
  : developmentConfiguration.storagePath

const PUBLIC_PATH = isProduction
  ? productionConfiguration.publicPath
  : developmentConfiguration.publicPath

const ASSET_PATH = assetName =>
  `${CDN_PATH}${assetName}`

export {
  API_BASE_URI,
  CDN_PATH,
  STORAGE_PATH,
  PUBLIC_PATH,
  ASSET_PATH
}
