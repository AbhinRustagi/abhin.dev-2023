import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mediaQuery } from '~/theme'

export const HeroWrapper = styled.section`
  margin-bottom: 6rem;
`

export const HeroGridWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(2, 1fr);

  ${mediaQuery.tablet} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(7, 1fr);
  }
`

export const HeroTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  grid-row: 3 / 5;
  grid-column: 1 / 3;

  ${mediaQuery.tablet} {
    padding: 0;
    grid-row: 2 / 3;
    grid-column: 1 / 4;
  }
`

export const baseImageWrapperStyles = css`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`

export const HeroImageWrapper = styled.div<{
  lg: { row: string; col: string }
  sm: { row: string; col: string }
}>`
  ${baseImageWrapperStyles}
  grid-row: ${(props) => props.sm.row};
  grid-column: ${(props) => props.sm.col};

  ${mediaQuery.tablet} {
    min-height: 10rem;
    grid-row: ${(props) => props.lg.row};
    grid-column: ${(props) => props.lg.col};
  }

  ${mediaQuery.tablet} {
    min-height: 12rem;
  }
`

export const contentContainerStyles = css`
  margin: 0;
  line-height: 1.75;

  p {
    margin: 1.5rem 0;
  }
`
