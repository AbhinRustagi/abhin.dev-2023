import Link from 'next/link'
import { useEffect } from 'react'
import { MdSunny } from 'react-icons/md'
import { Socials } from '~/components/Socials'
import { useMenuStateContext, useThemeContext } from '~/context'
import { menus } from '~/data'
import { makeKey } from '~/utils'
import {
  BrandWrapper,
  CloseNavMenuBtn,
  HeaderSocialsWrapper,
  NavMenuBtn,
  NavMenuSocialsWrapper,
  StyledNav,
  StyledNavList,
  ThemeButton,
  wrapperStyles,
} from './styled'

import { HeaderComponent, NavMenuComponent } from '~/types'

const Brand = () => (
  <BrandWrapper>
    <p>
      <Link href="/">Abhin Rustagi</Link>
    </p>
  </BrandWrapper>
)

const NavMenu: NavMenuComponent = ({ currentPath, open, toggle }) => {
  const [_, toggleTheme] = useThemeContext()

  return (
    <StyledNav open={open}>
      <StyledNavList>
        {menus.map((menuItem) => (
          <li key={makeKey(`header-nav-item`, menuItem.title || '')}>
            <Link
              className={currentPath === menuItem.path ? 'active' : ''}
              href={menuItem.path}
            >
              {menuItem.title}
            </Link>
          </li>
        ))}
      </StyledNavList>
      <ThemeButton
        key={makeKey(`header-nav-item`, 'theme')}
        onClick={toggleTheme}
      >
        <MdSunny />
      </ThemeButton>
      <NavMenuSocialsWrapper>
        <Socials />
      </NavMenuSocialsWrapper>
      <CloseNavMenuBtn onClick={toggle} />
    </StyledNav>
  )
}

export const Header: HeaderComponent = (props) => {
  const [isMenuOpen, toggle] = useMenuStateContext()

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [isMenuOpen])

  return (
    <header css={wrapperStyles}>
      <Brand />
      <NavMenuBtn onClick={toggle} />
      <NavMenu open={isMenuOpen} currentPath={props.path} toggle={toggle} />
      <HeaderSocialsWrapper>
        <Socials />
      </HeaderSocialsWrapper>
    </header>
  )
}
