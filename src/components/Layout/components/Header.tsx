import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Socials } from '~/components/Socials'
import { useThemeContext } from '~/context'
import { RouteData, routes } from '~/pageConfig'
import { mediaQuery } from '~/theme'
import { makeKey } from '~/utils'
import { MdSunny } from 'react-icons/md'

interface HeaderProps {
  currentPath: string
}

const Brand = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.title};
`

const wrapperStyles = css`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  ${mediaQuery.tablet} {
    margin-bottom: 2rem;
  }
`

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;

  li {
    display: block;
    font-weight: 500;
    cursor: pointer;

    a {
      display: block;
      text-align: center;
      padding: 0.5rem 0.75rem;
      justify-content: center;
      align-items: center;

      &.active,
      &:hover {
        border-radius: 0.5rem;

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
`

const ThemeButton = styled.li`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-radius: 0.5rem;
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
    width: 1rem;
    height: 1rem;
  }
`

const StyledNav = styled.nav`
  display: flex;
`

const NavMenu = ({
  routes,
  currentPath,
}: {
  routes: RouteData[]
  currentPath: string
}) => {
  const [_, toggleTheme] = useThemeContext()

  return (
    <StyledNav>
      <StyledNavList>
        {routes.map((route) => (
          <li key={makeKey(`header-nav-item`, route.title)}>
            <Link
              className={currentPath === route.path ? 'active' : ''}
              href={route.path}
            >
              {route.title}
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
    </StyledNav>
  )
}

export const Header = ({ currentPath }: HeaderProps) => {
  return (
    <header css={wrapperStyles}>
      <Brand>
        <p>Abhin Rustagi</p>
      </Brand>
      <NavMenu routes={routes} currentPath={currentPath} />
      <Socials />
    </header>
  )
}
