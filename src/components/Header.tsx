import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Container } from './Container'
import { mediaQuery } from '~/styles'
import Link from 'next/link'
import { makeKey } from '~/utils'

const wrapperStyles = css`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #aaaaaa;

  p {
    margin: 0;
  }

  ${mediaQuery.tablet} {
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      color: #f7f1e5;

      &:not(:last-child) {
        margin-right: 1.25rem;
      }

      a {
        display: block;
      }
    }
  }
`

export const Header = () => {
  return (
    // <Container as="header" css={wrapperStyles}>
    <div>
      <p>Abhin Rustagi</p>
      <nav>
        <ul></ul>
      </nav>
    </div>
    // </Container>
  )
}
