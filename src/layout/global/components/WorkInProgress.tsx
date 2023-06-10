import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin-bottom: 6rem;
  border-radius: 4px;
  padding: 1rem;
  ${(props) => {
    const bg = props.theme.colors.cardBackground
    const borderColor = props.theme.colors.graySelection
    return css`
      background-color: ${bg};
      border: 1px solid ${borderColor};
    `
  }};

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }
`

export const WorkInProgress = () => {
  return (
    <Wrapper>
      <h2>Work in Progress ⚙️</h2>
      <p>
        I am currently redeveloping my website, quite publicly. Some sections
        might be incomplete or may need a rejig.
      </p>
    </Wrapper>
  )
}
