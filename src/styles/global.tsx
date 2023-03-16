import { css, Global } from '@emotion/react'

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
    font-family: Inconsolata, 'Courier New', Courier, monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`

export const GlobalStyles = () => {
  return <Global styles={styles} />
}
