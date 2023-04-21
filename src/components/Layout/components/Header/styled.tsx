import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { RxCross2 } from 'react-icons/rx'
import { TiThMenu } from 'react-icons/ti'
import { mediaQuery } from '~/theme'

export const BrandWrapper = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.title};
`

export const wrapperStyles = css`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  ${mediaQuery.tablet} {
    margin-bottom: 5rem;
  }
`

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    display: block;
    font-weight: 500;
    cursor: pointer;

    a {
      display: block;
      text-align: left;
      padding: 0.5rem 1rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;

      &.active,
      &:hover {
        ${(props) => {
          const background = props.theme.colors.graySelection
          const color = props.theme.colors.title

          return css`
            background: ${background};
            color: ${color};
          `
        }}
      }
    }
  }

  ${mediaQuery.tablet} {
    flex-direction: row;

    li {
      a {
        text-align: center;
        padding: 0.5rem 0.75rem;
      }
    }
  }
`

export const ThemeButton = styled.li`
  display: flex;
  padding: 0.5rem 0.75rem;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  width: max-content;
  margin: 2rem 0 5rem;

  &:hover {
    ${(props) => {
      const background = props.theme.colors.graySelection
      const color = props.theme.colors.title

      return css`
        background: ${background};
        color: ${color};
      `
    }}
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  ${mediaQuery.tablet} {
    width: 100%;
    margin: 0;
    justify-content: center;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const StyledNav = styled.nav<{ open: boolean }>`
  ${(props) => {
    const isOpen = props.open
    const openStateStyles = css`
      bottom: 0;
      height: 100vh;
      padding: 3rem 2rem;
      background: ${props.theme.colors.background};
    `
    const closedStateStyles = css`
      height: 0;
    `

    return css`
      display: block;
      width: 100vw;
      top: 0;
      left: 0;
      right: 0;
      position: absolute;
      z-index: 99;
      overflow: hidden;
      ${isOpen ? openStateStyles : closedStateStyles}
    `
  }}
  transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  ${mediaQuery.tablet} {
    display: flex;
    position: relative;
    width: max-content;
    height: max-content;
  }
`

export const NavMenuSocialsWrapper = styled.div`
  display: block;

  ${mediaQuery.tablet} {
    display: none;
  }
`

export const HeaderSocialsWrapper = styled.div`
  display: none;

  ${mediaQuery.tablet} {
    display: block;
  }
`

export const NavMenuBtn = styled(TiThMenu)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  ${mediaQuery.tablet} {
    display: none;
  }
`

export const CloseNavMenuBtn = styled(RxCross2)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  ${mediaQuery.tablet} {
    display: none;
  }
`
