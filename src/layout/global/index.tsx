import { Container as Main, Header, Footer } from '~/layout/global/components'
import { ReactFCWithChildren } from '~/types'

export default function GlobalLayout(props: ReactFCWithChildren) {
  return (
    <>
      <Header />
      <Main as="main">{props.children}</Main>
      <Footer />
    </>
  )
}
