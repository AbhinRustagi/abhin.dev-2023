import mixpanel from 'mixpanel-browser'

export const sendMixpanelEvent = (eventName: string, options?: object) => {
  mixpanel.init('')
  mixpanel.track(eventName, options)
}
