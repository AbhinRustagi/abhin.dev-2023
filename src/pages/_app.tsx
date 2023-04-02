import '@fontsource/inter'
import '@fontsource/inter/300.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import 'react-tooltip/dist/react-tooltip.css'
import { ThemeProvider } from '~/context'
import { defaultSeoProps } from '~/data'
import { GlobalStyles } from '~/theme'

export default function App({ Component, pageProps }: AppProps) {
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
