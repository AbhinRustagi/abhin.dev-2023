import React from 'react'
import { Container } from './components'
import { Header } from './components/Header'

interface LayoutProps {
  currentPath: string
}

export function Layout(props: LayoutProps) {
  return (
    <Container>
      <Header currentPath={props.currentPath} />
      {/* Header */}
      <main></main>
      {/* Footer */}
    </Container>
  )
}
