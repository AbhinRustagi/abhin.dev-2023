import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo'
import type { AppProps } from 'next/app'
import { MenuStateContextProvider } from '~/context/menu'
import { ThemeProvider } from '~/context/theme'
import { defaultSeoProps } from '~/data'
import GlobalLayout from '~/layout/global'
import { GlobalStyles } from '~/theme'
import { buildPageSeo } from '~/utils/seo'
import { useRouter } from 'next/router'

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
      <ThemeProvider>
        <MenuStateContextProvider>
          <GlobalStyles />
          <GlobalLayout>
            <Component {...pageProps.data} />
          </GlobalLayout>
        </MenuStateContextProvider>
      </ThemeProvider>
    </>
  )
}
