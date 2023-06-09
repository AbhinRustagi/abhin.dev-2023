import { ReactFCWithChildren } from '~/types'
import { Container, Footer, Header } from './components'

export default function GlobalLayout(props: ReactFCWithChildren) {
  return (
    <>
      <Header />
      <Container as="main">{props.children}</Container>
      <Footer />
    </>
  )
}
