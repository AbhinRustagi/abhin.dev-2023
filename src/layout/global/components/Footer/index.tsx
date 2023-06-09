import Link from 'next/link'
import Clock from 'react-live-clock'
import { config } from '~/data'
import { FooterMenus } from '~/data/menus'
import { makeKey } from '~/utils'
import { Container } from '../Container'
import {
  FooterBottom,
  FooterMenuItem,
  FooterMenuTitle,
  FooterMenuWrapper,
  FooterMenusWrapper,
  StyledFooter,
} from './styled'

export const Footer = () => {
  return (
    <StyledFooter id="contact">
      <Container>
        <FooterMenusWrapper>
          {FooterMenus.map((menu) => {
            return (
              <FooterMenuWrapper key={makeKey('footer-menu', menu.title)}>
                <FooterMenuTitle>{menu.title}</FooterMenuTitle>
                <ul>
                  {menu.menu.map((menuItem) => (
                    <FooterMenuItem
                      key={makeKey('footer-menu', menu.title, menuItem.name)}
                    >
                      <Link href={menuItem.path}>{menuItem.name}</Link>
                    </FooterMenuItem>
                  ))}
                </ul>
              </FooterMenuWrapper>
            )
          })}
        </FooterMenusWrapper>
        <FooterBottom>
          <div>
            <Clock format="HH.mm" ticking timezone={config.timezone} /> local
            time &nbsp;&nbsp;•&nbsp;&nbsp; 0.04g of CO<sub>2</sub> produced
          </div>
          <div>&copy; Abhin Rustagi | All Rights Reserved</div>
        </FooterBottom>
      </Container>
    </StyledFooter>
  )
}
