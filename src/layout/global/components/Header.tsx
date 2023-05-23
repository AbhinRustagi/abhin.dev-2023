import { css } from '@emotion/react'
import { Container } from './Container'
import styled from '@emotion/styled'
import { HeaderMenu } from '~/data/menus'
import { makeKey } from '~/utils'
import Link from 'next/link'
import { mediaQuery } from '~/theme'
import { MdOutlineMenu } from 'react-icons/md'
import { useMenuStateContext } from '~/context/menu'

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 9;
`

const wrapperStyles = css`
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

const HeaderBrand = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.title};
`

const MenuBtn = styled(MdOutlineMenu)`
  width: 20px;
  height: 20px;
  cursor: pointer;

  ${mediaQuery.tablet} {
    display: none;
  }
`

const NavWrapper = styled.nav<{ isOpen: boolean }>`
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

const MenuListWrapper = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;

  ${mediaQuery.tablet} {
    flex-direction: row;
  }
`

const MenuListItem = styled.li`
  font-size: 1rem;
  margin: 0.25rem 0;

  ${mediaQuery.tablet} {
    margin: 0;
    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`

export const Header = () => {
  const [isOpen, toggle] = useMenuStateContext()

  return (
    <StyledHeader>
      <Container css={wrapperStyles}>
        <HeaderBrand>Abhin Rustagi</HeaderBrand>
        <MenuBtn onClick={toggle} />
        <NavWrapper isOpen={isOpen}>
          <MenuListWrapper>
            {HeaderMenu.map((menuItem) => (
              <MenuListItem key={makeKey('header-nav', menuItem.name)}>
                <Link className="hover" href={menuItem.path}>
                  {menuItem.name}
                </Link>
              </MenuListItem>
            ))}
          </MenuListWrapper>
        </NavWrapper>
      </Container>
    </StyledHeader>
  )
}
