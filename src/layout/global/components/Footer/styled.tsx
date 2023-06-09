import { Theme, css } from '@emotion/react'
import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
  margin-top: 8rem;
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${(props) => {
    const color = props.theme.colors.title
    return css`
      color: ${color};
    `
  }}
`

export const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 3px dotted ${(props) => props.theme.colors.cardBackground};
  font-size: 0.875rem;

  & div {
    &:first-of-type {
      margin-bottom: 0.5rem;
    }
  }
`

export const FooterMenusWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const FooterMenuWrapper = styled.div`
  min-width: 8rem;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`

export const FooterMenuItem = styled.li`
  list-style: none;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`

export const FooterMenuTitle = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.graySelection};
  margin-bottom: 1rem;
  font-size: 0.875rem;
`
