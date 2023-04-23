import { Wrapper, Row, Col } from './styled'
import { footerInformationMenu, socials } from '~/data'
import Link from 'next/link'
import { makeKey } from '~/utils'

export const Footer = () => {
  return (
    <Wrapper>
      <h2>Say hello!</h2>
      <p>
        Whether you want to talk shop, or just want to say hello, feel free to
        drop me a message! I&apos;m always excited to connect with new people.
      </p>
      <Row>
        <Col.wrapper>
          <Col.title>Information</Col.title>
          {footerInformationMenu.map((menuItem) => (
            <Col.item key={makeKey('footer-info', menuItem.title)}>
              <Link href={menuItem.path}>{menuItem.title}</Link>
            </Col.item>
          ))}
        </Col.wrapper>
        <Col.wrapper>
          <Col.title>Social</Col.title>
          {socials.map((social) => (
            <Col.item key={makeKey('footer-social', social.name)}>
              <Link href={social.link}>{social.name}</Link>
            </Col.item>
          ))}
        </Col.wrapper>
      </Row>
      <small>&copy; Abhin Rustagi | 2023</small>
    </Wrapper>
  )
}
