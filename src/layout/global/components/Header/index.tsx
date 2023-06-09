import Link from 'next/link'
import { useMenuStateContext } from '~/context/menu'
import { HeaderMenu } from '~/data/menus'
import { makeKey } from '~/utils'
import { Container } from '../Container'
import {
  HeaderBrand,
  MenuBtn,
  MenuListItem,
  MenuListWrapper,
  NavWrapper,
  wrapperStyles,
} from './styled'

export const Header = () => {
  const [isOpen, toggle] = useMenuStateContext()

  return (
    <header>
      <Container css={wrapperStyles}>
        <HeaderBrand>Abhin Rustagi</HeaderBrand>
        <MenuBtn onClick={toggle} />
        <NavWrapper isOpen={isOpen}>
          <MenuListWrapper>
            {HeaderMenu.map((menuItem) => (
              <MenuListItem key={makeKey('header-nav', menuItem.name)}>
                <Link href={menuItem.path}>{menuItem.name}</Link>
              </MenuListItem>
            ))}
          </MenuListWrapper>
        </NavWrapper>
      </Container>
    </header>
  )
}
