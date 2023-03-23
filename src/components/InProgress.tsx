import styled from '@emotion/styled'
import Link from 'next/link'

const Wrapper = styled.div`
  border: 1px solid #eeeeee;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 3rem;

  p {
    font-size: 0.875rem;
    margin: 0;
  }
`

export const InProgress = () => {
  return (
    <Wrapper>
      <p>
        <strong>In Progress ⚒️</strong>
      </p>
      <p>
        I am currently publicly redeveloping my personal website. Some things
        might be missing! You can alternatively check my{' '}
        <Link
          href="https://www.linkedin.com/in/abhinrustagi"
          className="accent"
        >
          LinkedIn
        </Link>
        .
      </p>
    </Wrapper>
  )
}
