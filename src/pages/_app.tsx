import type { AppProps } from 'next/app'
import { DefaultSeo, NextSeo } from 'next-seo'
import { defaultSeoProps } from '~/data'
import { GlobalStyles } from '~/styles'
import { Container } from '~/components/Container'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo />
      <GlobalStyles />
      <Container as="main">
        <Component {...pageProps} />
      </Container>
    </>
  )
}
