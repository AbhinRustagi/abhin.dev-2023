import { css } from '@emotion/react'
import { Theme as CustomTheme } from './theme'

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}

declare module '@emotion/react' {
  interface Theme extends CustomTheme {}
}
