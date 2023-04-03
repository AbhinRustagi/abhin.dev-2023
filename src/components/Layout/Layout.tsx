import React from 'react'
import { Container } from './components'
import { Header } from './components/Header'
import { PageData } from '~/data'

export function Layout(props: PageData) {
  return (
    <Container>
      <Header metadata={props.metadata} />
      {/* Header */}
      <main></main>
      {/* Footer */}
    </Container>
  )
}
