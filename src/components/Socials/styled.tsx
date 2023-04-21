import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import type { IconType } from 'react-icons'

export const Wrapper = styled.div`
  display: flex;
`

export const StyledLink = styled(Link)<{ hovercolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  padding: 0.375rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray};

  &:hover {
    color: ${(props) => props.hovercolor || props.theme.colors.title};
  }
`

export const tooltipStyles = css`
  font-size: 0.75rem;
  font-weight: 500;
`

export const BuildSocialIcon = (icon: IconType) => styled(icon)`
  width: 1.25rem;
  height: 1.25rem;
  transition-duration: 0.1ms;
`
