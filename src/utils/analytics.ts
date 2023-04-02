import mixpanel from 'mixpanel-browser'

declare global {
  interface Window {
    gtag?: (...args: any) => void
  }
}

interface GAEventProps {
  action: string
  category: string
  label: string
  value: string
}

export const sendMixpanelEvent = (eventName: string, options?: object) => {
  if (!window) return

  mixpanel.init('')
  mixpanel.track(eventName, options)
}

export const ga = {
  pageView: (url: string) => {
    if (!window || !window?.gtag) return
    window.gtag('config', `TODO: Replace GA ID Here`, {
      page_path: url,
    })
  },
  event: ({ action, category, label, value }: GAEventProps) => {
    if (!window || !window?.gtag) return
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  },
}
