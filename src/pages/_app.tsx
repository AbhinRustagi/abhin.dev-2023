import '@fontsource/inter'
import '@fontsource/inter/300.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import router, { useRouter } from 'next/router'
import { useEffect } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { ThemeProvider } from '~/context'
import { defaultSeoProps } from '~/data'
import { GlobalStyles } from '~/theme'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo />
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        {/* <InProgress /> */}
      </ThemeProvider>
    </>
  )
}
