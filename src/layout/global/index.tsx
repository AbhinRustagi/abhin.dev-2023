import { ReactFCWithChildren } from '~/types'
import { Container, Footer, Header, WorkInProgress } from './components'

export default function GlobalLayout(props: ReactFCWithChildren) {
  return (
    <>
      <Header />
      <Container as="main">
        <WorkInProgress />
        {props.children}
      </Container>
      <Footer />
    </>
  )
}
