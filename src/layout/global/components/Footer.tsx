import { css } from '@emotion/react'
import { Container } from './Container'
import styled from '@emotion/styled'

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

export const Footer = () => {
  return (
    <Container as="footer" css={wrapperStyles}>
      <StyledHR />
      footer.
    </Container>
  )
}
