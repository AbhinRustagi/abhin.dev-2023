import styled from '@emotion/styled'
import { mediaQuery } from '~/theme'

export const Hero = {
  wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6rem;
    margin-bottom: 6rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.grayTranslucent};

    ${mediaQuery.tablet} {
      margin-top: 2rem;
      flex-direction: row;
    }
  `,
  content: styled.div`
    width: 100%;
    margin-bottom: 2rem;
    height: max-content;

    p {
      margin-bottom: 1rem;
    }

    ${mediaQuery.tablet} {
      width: 32rem;
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

export const WorkTimeline = {
  wrapper: styled.section`
    margin: 6rem 0;
  `,
}
