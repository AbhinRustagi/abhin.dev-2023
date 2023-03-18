import { css, Global } from '@emotion/react'
import { mediaQuery } from './utils'

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    color: #f7f1e5;
    background: #20262e;
    line-height: 1.5;
    font-family: 'Inconsolata', 'Courier New', Courier, monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .accent {
    color: #91d8e4;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }

  p {
    font-size: 1.125rem;
    margin: 1rem 0;
  }

  h1,
  h2,
  h3,
  h4 {
    font-size: 1.125rem;
  }

  h1 {
    font-size: 1.25rem;
  }

  ${mediaQuery.custom(420, 'max')} {
    p {
      font-size: 1rem;
    }
  }
`

export const GlobalStyles = () => {
  return <Global styles={styles} />
}
