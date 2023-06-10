import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mediaQuery } from '~/theme'

export const StyledItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }

  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.title};
  }
`

export const StyledListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  margin-top: 3rem;
`

export const StyledListItem = styled.li`
  margin-bottom: 2rem;

  ${mediaQuery.tablet} {
    width: calc(50% - 1rem);
    &:nth-child(2n - 1) {
      margin-right: 2rem;
    }
  }
`
