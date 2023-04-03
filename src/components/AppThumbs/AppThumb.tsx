import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface AppThumbProps {
  background?: string
  color: string
}

export const AppThumb = styled.div<AppThumbProps>`
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 3.125rem;
  padding: 0.75rem;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition-property: box-shadow;
  transition-duration: 0.2s;

  svg {
    width: 2.25rem;
    height: 2.25rem;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  ${({ background, color, theme }) => {
    const bg = background ? background : theme.colors.background
    return css`
      border: 1px solid ${theme.colors.graySelection};
      background: ${bg};
      color: ${color};
    `
  }};
`
