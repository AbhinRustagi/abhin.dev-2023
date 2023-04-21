import React from 'react'
import { Container, Header } from './components'

interface LayoutProps {
  path: string
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <Container>
      <Header path={props.path} />
      <main>{props.children}</main>
      {/* Footer */}
    </Container>
  )
}
