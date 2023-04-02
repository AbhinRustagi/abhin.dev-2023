import { css, Global, Theme, useTheme } from '@emotion/react'
import { mediaQuery } from './utils'

const buildStyles = (theme: Theme) =>
  css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      scroll-behavior: smooth;
    }

    body {
      color: ${theme.colors.body};
      background: ${theme.colors.background};
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4 {
      color: ${theme.colors.title};
    }

    @media (prefers-color-scheme: dark) {
      html {
        color-scheme: dark;
      }
    }
  `

export const GlobalStyles = () => {
  const theme = useTheme()
  const styles = buildStyles(theme)

  return <Global styles={styles} />
}
