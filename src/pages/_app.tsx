import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo, NextSeo } from 'next-seo'
import { defaultSeoProps } from '~/data'
import { GlobalStyles } from '~/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
