import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { MdOutlineMenu } from 'react-icons/md'
import { mediaQuery } from '~/theme'

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 9;
`

export const wrapperStyles = css`
  margin: 0 auto 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${mediaQuery.tablet} {
    flex-wrap: nowrap;
  }
`

export const HeaderBrand = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.title};
`

export const MenuBtn = styled(MdOutlineMenu)`
  width: 20px;
  height: 20px;
  cursor: pointer;

  ${mediaQuery.tablet} {
    display: none;
  }
`

export const NavWrapper = styled.nav<{ isOpen: boolean }>`
  overflow: hidden;
  width: 100%;
  transition-property: max-height, padding;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  ${(props) => {
    const maxHeight = props.isOpen ? '100vh' : 0
    const paddingTop = props.isOpen ? '1rem' : 0

    return css`
      padding-top: ${paddingTop};
      max-height: ${maxHeight};
    `
  }}

  ${mediaQuery.tablet} {
    width: max-content;
    max-height: max-content;
  }
`

export const MenuListWrapper = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;

  ${mediaQuery.tablet} {
    flex-direction: row;
  }
`

export const MenuListItem = styled.li`
  font-size: 1rem;
  margin: 0.25rem 0;

  ${mediaQuery.tablet} {
    margin: 0;
    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`
