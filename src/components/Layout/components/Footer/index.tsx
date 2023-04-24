import { Wrapper, Row, Col } from './styled'
import { footerInformationMenu, footerSocials } from '~/data'
import Link from 'next/link'
import { makeKey } from '~/utils'
import { ReactFC } from '~/types'

interface ColumnProps {
  title: string
  items: any[]
  titleKey: string
  linkKey: string
}

const data = [
  {
    title: 'Information',
    items: footerInformationMenu,
    titleKey: 'title',
    linkKey: 'path',
  },
  {
    title: 'Socials',
    items: footerSocials,
    titleKey: 'name',
    linkKey: 'link',
  },
]

const Column: ReactFC<ColumnProps> = (props) => {
  const { title, titleKey, linkKey, items } = props

  return (
    <Col.wrapper>
      <Col.title>{title}</Col.title>
      {items.map((item) => (
        <Col.item key={makeKey('footer', title, item[titleKey])}>
          <Link href={item[linkKey]}>{item[titleKey]}</Link>
        </Col.item>
      ))}
    </Col.wrapper>
  )
}

export const Footer = () => {
  return (
    <Wrapper>
      <h2>Say hello!</h2>
      <p>
        Whether you want to talk shop, or just want to say hello, feel free to
        drop me a message! I&apos;m always excited to connect with new people.
      </p>
      <Row>
        {data.map((col) => (
          <Column key={makeKey('footer-col', col.title)} {...col} />
        ))}
      </Row>
      <small>&copy; Abhin Rustagi | 2023</small>
    </Wrapper>
  )
}
