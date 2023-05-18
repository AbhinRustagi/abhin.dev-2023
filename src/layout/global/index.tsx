import { Header } from '~/components'
import { Container as Main } from '~/layout/global/components/Container'
import { ReactFCWithChildren } from '~/types'

export default function GlobalLayout(props: ReactFCWithChildren) {
  return (
    <>
      <Header />
      <Main as="main">{props.children}</Main>
      {/* <Footer /> */}
    </>
  )
}
