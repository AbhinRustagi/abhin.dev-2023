import React from 'react'
import { IconType } from 'react-icons/lib'

// Utils
interface ReactChildren {
  children?: React.ReactNode
}

export type ReactFC<T> = React.FC<T & ReactChildren>

// Header
export type HeaderComponent = ReactFC<{ path: string }>

interface NavMenuProps {
  currentPath: string
  open: boolean
  toggle: () => void
}

export type NavMenuComponent = ReactFC<NavMenuProps>

// Socials
export interface SocialItem {
  name: string
  link: string
  icon: IconType
  tooltip: string
  hovercolor: string
}
