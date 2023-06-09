import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const wrapperStyles = css`
  margin: 12rem auto 4rem;
`

export const StyledHR = styled.hr`
  margin-bottom: 3rem;
  border: none;
  height: 1px;
  width: 100%;
  background-color: gray;
`

export const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 3px dotted ${(props) => props.theme.colors.grayTranslucent};
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
  font-size: 0.875rem;
`

export const FooterMenuTitle = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.colors.title};
  margin-bottom: 1rem;
  font-size: 1rem;
`
