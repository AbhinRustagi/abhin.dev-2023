import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mediaQuery } from '~/styles'

export const Container = styled.div`
  max-width: 50rem; // 800px
  margin: 6rem auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${mediaQuery.custom(800)} {
    margin: 12rem auto;
    padding-right: 0;
    padding-left: 0;
  }
`

export const mainStyles = css`
  margin-top: 1rem;

  ${mediaQuery.tablet} {
    margin-top: 1rem;
  }
`
