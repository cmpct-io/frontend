const developmentConfiguration = {
  'apiBaseUrI': 'https://localhost:44302/api',
  'appInsights': '',
  'publicPath': ''
}

const productionConfiguration = {
  'apiBaseUrI': 'https://cmpct-api-tmp.azurewebsites.net/api',
  'appInsights': '47f10985-4ca6-4031-8093-da011cddeee5',
  'publicPath': 'https://cmpct.azureedge.net'
}

const isProduction = process.env.NODE_ENV === 'production'

const API_BASE_URI = isProduction
  ? productionConfiguration.apiBaseUrI
  : developmentConfiguration.apiBaseUrI

const APP_INSIGHTS_KEY = isProduction
  ? productionConfiguration.appInsights
  : developmentConfiguration.appInsights

const PUBLIC_PATH = isProduction
  ? productionConfiguration.publicPath
  : developmentConfiguration.publicPath

const ASSET_PATH = assetName =>
  `${PUBLIC_PATH}${assetName}`

export {
  API_BASE_URI,
  APP_INSIGHTS_KEY,
  PUBLIC_PATH,
  ASSET_PATH
}
