import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const contentContainerStyles = (props: any) => css`
  margin: 0;
  margin-top: 3rem;
  line-height: 1.75;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
`

export const StyledItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }

  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.title};
  }
`
