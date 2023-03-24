import type { AppProps } from 'next/app'
import { DefaultSeo, NextSeo } from 'next-seo'
import { defaultSeoProps } from '~/data'
import { GlobalStyles } from '~/styles'
import { Container } from '~/components/Container'
import { InProgress } from '~/components'
import '@fontsource/inconsolata'
import '@fontsource/inconsolata/500.css'
import '@fontsource/inconsolata/600.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo />
      <GlobalStyles />
      <Container as="main">
        <InProgress />
        <Component {...pageProps} />
      </Container>
    </>
  )
}
