import { css } from '@emotion/react'
import { Container } from './Container'
import styled from '@emotion/styled'
import { HeaderMenu } from '~/data/menus'
import { makeKey } from '~/utils'
import Link from 'next/link'
import { mediaQuery } from '~/theme'

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
`

const HeaderBrand = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  /* text-transform: uppercase; */
  color: ${(props) => props.theme.colors.title};
`

const NavWrapper = styled.nav``

const MenuListWrapper = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
`

const MenuListItem = styled.li`
  font-size: 1rem;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <Container css={wrapperStyles}>
        <HeaderBrand>Abhin Rustagi</HeaderBrand>
        <NavWrapper>
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
