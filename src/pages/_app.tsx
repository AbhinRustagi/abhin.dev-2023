import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inconsolata.className}>
      <Component {...pageProps} />
    </div>
  )
}
