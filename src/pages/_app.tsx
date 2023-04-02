import type { AppProps } from 'next/app'
import { DefaultSeo, NextSeo } from 'next-seo'
import { defaultSeoProps } from '~/data'
import { GlobalStyles } from '~/theme'
import { Container, mainStyles } from '~/components/Container'
import { Header, InProgress } from '~/components'
import '@fontsource/inconsolata'
import '@fontsource/inconsolata/500.css'
import '@fontsource/inconsolata/600.css'
import { ThemeProvider } from '~/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo />
      <ThemeProvider>
        <GlobalStyles />
        <Header />
        <Container as="main" css={mainStyles}>
          <InProgress />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}
