import React from 'react'
import { Container } from './components'
import { Header } from './components/Header'
import { PageData } from '~/data'
import { Gallery, Twitter, Wakatime } from '../AppThumbs/Gallery'

export function Layout(props: PageData) {
  return (
    <Container>
      <Header metadata={props.metadata} />
      {/* Header */}
      <main>
        <Gallery />
        <Twitter />
        <Wakatime />
      </main>
      {/* Footer */}
    </Container>
  )
}
