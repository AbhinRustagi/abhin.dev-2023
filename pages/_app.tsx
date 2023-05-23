import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { MenuStateContextProvider } from '~/context/menu'
import { ThemeProvider } from '~/context/theme'
import { defaultSeoProps } from '~/data'
import GlobalLayout from '~/layout/global'
import { GlobalStyles } from '~/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo />
      <ThemeProvider>
        <MenuStateContextProvider>
          <GlobalStyles />
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
        </MenuStateContextProvider>
      </ThemeProvider>
    </>
  )
}
