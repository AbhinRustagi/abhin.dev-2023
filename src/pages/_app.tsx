import '@fontsource/inter'
import '@fontsource/inter/300.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Layout } from '~/components'
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
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo {...pageProps.metadata} />
      <ThemeProvider>
        <MenuStateContextProvider>
          <GlobalStyles />
          <Layout path={router.pathname}>
            <Component {...pageProps} />
          </Layout>
        </MenuStateContextProvider>
      </ThemeProvider>
    </>
  )
}
