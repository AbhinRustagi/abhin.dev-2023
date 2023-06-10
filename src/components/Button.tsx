import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

export const Button = styled(Link)`
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  padding: 0.75rem 1.25rem;
  display: block;
  width: max-content;

  ${(props) => {
    const bg = props.theme.colors.title
    const color = props.theme.colors.background
    return css`
      background-color: ${bg};
      color: ${color};
    `
  }};
`
