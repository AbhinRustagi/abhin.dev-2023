import React from 'react'
import { Container, Footer, Header, Main } from './components'

interface LayoutProps {
  path: string
  title?: string
  description?: string
  image?: string
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <Container>
      <Header path={props.path} />
      <Main {...props}>{props.children}</Main>
      <Footer />
    </Container>
  )
}
