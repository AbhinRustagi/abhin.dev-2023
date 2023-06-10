import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mediaQuery } from '~/theme'

export const HeroWrapper = styled.section`
  margin-bottom: 6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: column-reverse;

  ${mediaQuery.tablet} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`

export const ImagesWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: max-content;

  ${mediaQuery.tablet} {
    max-width: 16rem;
  }
`

export const baseImageWrapperStyles = css`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`

export const HeroImageWrapper = styled.div`
  ${baseImageWrapperStyles}
  flex-grow: 1;
  flex-basis: 100%;
  min-height: 20rem;

  &:last-of-type {
    display: none;
  }

  ${mediaQuery.tablet} {
    flex-basis: calc(40% - 1rem);
    flex-grow: 0.4;
    min-height: 12rem;
    max-height: 16rem;

    &:last-of-type {
      margin-top: 1rem;
      display: block;
    }
  }

  ${mediaQuery.desktop} {
    flex-basis: calc(25% - 1rem);
    flex-grow: 0.25;
    min-height: 16rem;
  }
`

export const contentContainerStyles = css`
  margin: 0;
  max-width: 32rem;

  p {
    margin: 1.5rem 0;
  }

  h2 {
    font-size: 1.25rem;
    margin: 3rem 0 0;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 50%;
      margin-top: 1rem;

      ${mediaQuery.tablet} {
        width: 30%;
      }
    }
  }
`
