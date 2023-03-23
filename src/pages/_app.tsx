import type { AppProps } from 'next/app'
import { DefaultSeo, NextSeo } from 'next-seo'
import { defaultSeoProps } from '~/data'
import { GlobalStyles } from '~/styles'
import { Container } from '~/components/Container'
import { InProgress } from '~/components'

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
