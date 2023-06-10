import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { MenuStateContextProvider } from '~/context/menu'
import { defaultSeoProps } from '~/data'
import GlobalLayout from '~/layout/global'
import { GlobalStyles, theme } from '~/theme'
import { buildPageSeo } from '~/utils/seo'

interface CustomAppProps {
  data: any
  seo?: NextSeoProps
}

export default function App({
  Component,
  pageProps,
}: AppProps<CustomAppProps>) {
  const router = useRouter()

  const pageSeo = buildPageSeo({
    title: pageProps.seo?.title || '',
    description: pageProps.seo?.description || '',
    path: router.pathname,
  })

  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo {...pageSeo} />
      <EmotionThemeProvider theme={theme}>
        <MenuStateContextProvider>
          <GlobalStyles />
          <GlobalLayout>
            <Component {...pageProps.data} />
          </GlobalLayout>
        </MenuStateContextProvider>
      </EmotionThemeProvider>
    </>
  )
}
