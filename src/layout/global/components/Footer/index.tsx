import Link from 'next/link'
import Clock from 'react-live-clock'
import { config } from '~/data'
import { Container } from '../Container'
import { FooterBottom, FooterTop, StyledFooter } from './styled'

export const Footer = () => {
  return (
    <StyledFooter id="contact">
      <Container>
        <FooterTop>
          <h2>Get in touch</h2>
          <p>
            I am currently open to new opportunities. If you want, you can check
            out my{' '}
            <Link className="accent strong" href="">
              LinkedIn
            </Link>{' '}
            profile or my{' '}
            <Link className="accent strong" href="">
              Resume
            </Link>
            . I also regularly work on side projects of varying scales which can
            be found on my{' '}
            <Link className="accent strong" href="">
              Github
            </Link>{' '}
            profile, and sometimes post on my{' '}
            <Link className="accent strong" href="">
              Twitter
            </Link>{' '}
            page.
          </p>
          <p>
            If you have any questions, feedback, or just want say hello or grab
            coffee, don&apos;t be in two minds about{' '}
            <Link className="accent strong" href="">
              sending me an email
            </Link>
            .
          </p>
        </FooterTop>
        <FooterBottom>
          <div>
            <Link href="/uses" className="underline">
              Uses
            </Link>
            &nbsp;&nbsp;•&nbsp;&nbsp;
            <Link href="/colophon" className="underline">
              Colophon
            </Link>
          </div>
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
