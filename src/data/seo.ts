import { DefaultSeoProps } from 'next-seo'

export const WEBSITE_BASE_URL = 'https://www.abhin.dev'

export const defaultSeoProps: DefaultSeoProps = {
  titleTemplate: '%s ⏴ Abhin Rustagi',
  defaultTitle: 'Abhin Rustagi – Full Stack Engineer',
  description:
    'Abhin Rustagi is full stack engineer with over 2 years of experience. He works with Python, Django, React, Javascript & many other technologies.',
  canonical: WEBSITE_BASE_URL,
  openGraph: {
    locale: 'en_IE',
    siteName: 'Abhin Rustagi',
    url: WEBSITE_BASE_URL,
  },
  twitter: {
    handle: '@abhinrustagi',
    site: '@abhinrustagi',
    cardType: 'summary_large_image',
  },
}
