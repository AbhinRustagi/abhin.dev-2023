import { Theme, css } from '@emotion/react'
import styled from '@emotion/styled'
import { mediaQuery } from '~/theme'

export const StyledFooter = styled.footer`
  margin-top: 4rem;
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${(props) => {
    const color = props.theme.colors.title
    return css`
      color: ${color};
      border-top: 1px solid ${props.theme.colors.grayTranslucent};
    `
  }}
`

export const FooterTop = styled.div`
  h2 {
    margin-bottom: 2rem;
  }

  p {
    margin: 1rem 0;
  }

  ${mediaQuery.tablet} {
    max-width: 32rem;
  }
`

export const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 3px dotted ${(props) => props.theme.colors.cardBackground};
  font-size: 0.875rem;

  & div {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`
