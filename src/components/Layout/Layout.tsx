import React from 'react'
import { Container } from './components'
import { Header } from './components/Header'
import { Gallery, Twitter, Wakatime } from '../AppThumbs/Gallery'

interface LayoutProps {
  path: string
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <Container>
      <Header path={props.path} />
      <main>{props.children}</main>
      {/* Footer */}
    </Container>
  )
}
