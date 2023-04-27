import React from 'react'
import { Container, Footer, Header, Main } from './components'
import { PageMetadata } from '~/types'

interface LayoutProps {
  path: string
  metadata: PageMetadata
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <Container>
      <Header path={props.path} />
      <Main {...props.metadata}>{props.children}</Main>
      <Footer />
    </Container>
  )
}
