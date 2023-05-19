import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { defaultSeoProps } from '~/data'
import GlobalLayout from '~/layout/global'
import { GlobalStyles } from '~/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo />
      <GlobalStyles />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </>
  )
}
