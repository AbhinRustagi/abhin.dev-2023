import styled from '@emotion/styled'
import { mediaQuery } from '~/theme'

export const Hero = {
  wrapper: styled.section`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;

    ${mediaQuery.tablet} {
      padding: 2rem 0 6rem;
      flex-direction: row;
    }
  `,
  content: styled.div`
    width: 100%;
    margin-bottom: 2rem;
    height: max-content;

    ${mediaQuery.tablet} {
      width: 30rem;
      margin-bottom: 0;
      margin-right: 2rem;
    }
  `,
  image: styled.div`
    width: 100%;
    height: 20rem;
    position: relative;
    overflow: hidden;
    border-radius: 4px;

    ${mediaQuery.tablet} {
      width: 16rem;
    }
  `,
  title: styled.h1`
    font-size: 1.625rem;
  `,
}
