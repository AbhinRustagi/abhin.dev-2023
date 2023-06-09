import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { MdOutlineMenu } from 'react-icons/md'
import { mediaQuery } from '~/theme'

export const wrapperStyles = css`
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${mediaQuery.tablet} {
    flex-wrap: nowrap;
  }
`

export const HeaderBrand = styled.div`
  font-size: 1.375rem;
  font-weight: 600;
`

export const MenuBtn = styled(MdOutlineMenu)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.title};

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
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.title};
  text-transform: uppercase;
  margin: 0.25rem 0;

  ${mediaQuery.tablet} {
    margin: 0;

    & > a {
      padding: 0.25rem 0.5rem;
      border-radius: 3px;
      display: block;
      &:hover {
        background-color: ${(props) => props.theme.colors.grayTranslucent};
      }
    }

    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`
