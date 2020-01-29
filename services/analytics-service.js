import { APP_INSIGHTS_KEY } from '@/services/configuration-service.js'

const TRACK_EVENT = (vm, event, message = '') => {
  if (APP_INSIGHTS_KEY) {
    vm.$appInsights.trackEvent({
      name: event,
      properties: {
        customProperty: message
      }
    })
  }
}

export {
  TRACK_EVENT
}
