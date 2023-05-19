import { css } from '@emotion/react'
import { Container } from './Container'
import styled from '@emotion/styled'
import Clock from 'react-live-clock'
import { FooterMenus } from '~/data/menus'
import { makeKey } from '~/utils'
import Link from 'next/link'

const wrapperStyles = css`
  margin: 4rem auto;
`

const StyledHR = styled.hr`
  margin-bottom: 3rem;
  border: none;
  height: 1px;
  width: 100%;
  background-color: gray;
`

const FooterBottom = styled.div`
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

const FooterMenusWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FooterMenuWrapper = styled.div`
  min-width: 8rem;

  &:not(:last-of-type) {
    margin-right: 3rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`

const FooterMenuItem = styled.li`
  list-style: none;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`

const FooterMenuTitle = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.colors.title};
  margin-bottom: 1rem;
  font-size: 1rem;
`

export const Footer = () => {
  return (
    <Container as="footer" css={wrapperStyles}>
      <StyledHR />
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
                    <Link className="hover" href={menuItem.path}>
                      {menuItem.name}
                    </Link>
                  </FooterMenuItem>
                ))}
              </ul>
            </FooterMenuWrapper>
          )
        })}
      </FooterMenusWrapper>
      <FooterBottom>
        <div>
          <Clock format="HH:mm" ticking timezone="Asia/Kolkata" /> local time
          &nbsp;&nbsp;•&nbsp;&nbsp; 0.04g of CO<sub>2</sub> produced
        </div>
        <div>&copy; Abhin Rustagi | All Rights Reserved</div>
      </FooterBottom>
    </Container>
  )
}
