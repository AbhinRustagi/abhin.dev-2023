import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { ErrorBoundary } from '~/components'
import Layout from '~/components/Layout'
import { isProduction } from '~/config'
import { MenuStateContextProvider, ThemeProvider } from '~/context'
import { defaultSeoProps } from '~/data'
import { GlobalStyles } from '~/theme'
import { ga } from '~/utils'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (!isProduction) return

    const handleRouteChange = (url: string) => {
      ga.pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ErrorBoundary>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo {...pageProps.seo} />
      <ThemeProvider>
        <MenuStateContextProvider>
          <GlobalStyles />
          <Layout path={router.pathname} {...pageProps?.metadata}>
            <Component {...pageProps} />
          </Layout>
        </MenuStateContextProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
