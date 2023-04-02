import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mediaQuery } from '~/theme'

export const Container = styled.div`
  max-width: 50rem; // 800px
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 1rem;

  ${mediaQuery.custom(800)} {
    padding-right: 0;
    padding-left: 0;
  }
`
