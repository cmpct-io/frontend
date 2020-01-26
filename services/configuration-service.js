const developmentConfiguration = {
  'apiBaseUrI': 'https://localhost:44302/api',
  'appInsights': ''
}

const productionConfiguration = {
  'apiBaseUrI': 'https://cmpct-api-tmp.azurewebsites.net/api',
  'appInsights': '47f10985-4ca6-4031-8093-da011cddeee5'
}

const isProduction = process.env.NODE_ENV === 'production'

const API_BASE_URI = isProduction
  ? productionConfiguration.apiBaseUrI
  : developmentConfiguration.apiBaseUrI

const APP_INSIGHTS_KEY = isProduction
  ? productionConfiguration.appInsights
  : developmentConfiguration.appInsights

export {
  API_BASE_URI,
  APP_INSIGHTS_KEY
}
