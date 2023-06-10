import { css, Global, Theme, useTheme } from '@emotion/react'

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
      line-height: 1.5;
      color: ${theme.colors.body};
      background: ${theme.colors.background};
      font-family: 'Instrument Sans', system-ui, -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;

      &.hover {
        padding: 2px 4px;
        margin-left: -4px;
        display: inline-block;

        &:hover {
          background-color: ${theme.colors.gray};
          color: ${theme.colors.title};
          border-radius: 4px;
        }
      }

      &.underline {
        text-decoration: underline;
      }

      &.ext {
        ::after {
          content: ' 🔗';
        }
      }
    }

    h1,
    h2,
    h3,
    h4 {
      line-height: 1.625;
      font-weight: 600;
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
