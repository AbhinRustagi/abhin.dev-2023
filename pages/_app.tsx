import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo'
import type { AppProps } from 'next/app'
import { MenuStateContextProvider } from '~/context/menu'
import { ThemeProvider } from '~/context/theme'
import { defaultSeoProps } from '~/data'
import GlobalLayout from '~/layout/global'
import { GlobalStyles } from '~/theme'

interface CustomAppProps {
  data: any
  seo: NextSeoProps
}

export default function App({
  Component,
  pageProps,
}: AppProps<CustomAppProps>) {
  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo {...pageProps.seo} />
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
