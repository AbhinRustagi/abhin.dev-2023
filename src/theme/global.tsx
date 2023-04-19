import { css, Global, Theme, useTheme } from '@emotion/react'
import { injectGlobal } from '@emotion/css'

injectGlobal`
  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Light.woff2') format('woff2'),
        url('/fonts/Satoshi/Satoshi-Light.woff') format('woff');
    font-weight: 300;
    font-display: swap;
    font-style: normal;
  }


  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-LightItalic.woff2') format('woff2'),
        url('/fonts/Satoshi/Satoshi-LightItalic.woff') format('woff');
    font-weight: 300;
    font-display: swap;
    font-style: italic;
  }


  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Regular.woff2') format('woff2'),
        url('/fonts/Satoshi/Satoshi-Regular.woff') format('woff');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }


  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Italic.woff2') format('woff2'),
        url('/fonts/Satoshi/Satoshi-Italic.woff') format('woff');
    font-weight: 400;
    font-display: swap;
    font-style: italic;
  }


  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Medium.woff2') format('woff2'),
        url('/fonts/Satoshi/Satoshi-Medium.woff') format('woff');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }


  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-MediumItalic.woff2') format('woff2'),
        url('/fonts/Satoshi/Satoshi-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-display: swap;
    font-style: italic;
  }


  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Bold.woff2') format('woff2'),
        url('/fonts/Satoshi/Satoshi-Bold.woff') format('woff');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-BoldItalic.woff2') format('woff2'),
        url('/fonts/Satoshi/Satoshi-BoldItalic.woff') format('woff');
    font-weight: 700;
    font-display: swap;
    font-style: italic;
  }


  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-Black.woff2') format('woff2'),
        url('/fonts/Satoshi/Satoshi-Black.woff') format('woff');
    font-weight: 900;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi/Satoshi-BlackItalic.woff2') format('woff2'),
        url('/fonts/Satoshi/Satoshi-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-display: swap;
    font-style: italic;
  }
`

const buildStyles = (theme: Theme) =>
  css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      transition-duration: 0.2s;
      transition-property: background-color, color;
    }

    html,
    body {
      scroll-behavior: smooth;
    }

    body {
      color: ${theme.colors.body};
      background: ${theme.colors.background};
      font-family: Satoshi, system-ui, -apple-system, BlinkMacSystemFont,
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
