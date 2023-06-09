import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  padding: 2rem 0 6rem;
`

function Hero() {
  return (
    <Wrapper>
      <h1>
        An engineer with a love for developing user-first and accessible digital
        products.
      </h1>
      <br />
      <p>
        I&apos;m a software engineer who is always open to opportunities to
        positively improve the human life on scale. With 2 years of experience
        working as a software engineer, the ability to create or innovate still
        excites me just as much as it did when I started.
      </p>
    </Wrapper>
  )
}

export default function Home() {
  return <Hero />
}
