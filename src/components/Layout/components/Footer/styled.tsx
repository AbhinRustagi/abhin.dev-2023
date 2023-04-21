import styled from '@emotion/styled'
import { mediaQuery } from '~/theme'

export const Wrapper = styled.footer`
  margin: 3rem 0;
  padding: 2rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.cardBackground};

  p {
    margin-top: 2rem;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
`

export const Col = {
  wrapper: styled.ul`
    list-style: none;
    padding: 0;
    min-width: 16rem;

    ${mediaQuery.tablet} {
      min-width: 10rem;
    }
  `,
  title: styled.p`
    color: ${(props) => props.theme.colors.title};
    margin-bottom: 0.5rem;
    font-weight: 600;
  `,
  item: styled.li`
    margin-bottom: 0.25rem;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      &:hover {
        color: ${(props) => props.theme.colors.accent};
      }
    }
  `,
}
