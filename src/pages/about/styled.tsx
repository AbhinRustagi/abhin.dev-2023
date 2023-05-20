import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mediaQuery } from '~/theme'

export const HeroWrapper = styled.section`
  margin-bottom: 6rem;
`

export const HeroGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: column-reverse;

  ${mediaQuery.tablet} {
    flex-direction: row;
  }
`

export const HeroTitleWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQuery.tablet} {
    padding: 1.5rem;
    padding-left: 0;
    flex-basis: calc(60% - 1rem);
    flex-grow: 0.6;
  }

  ${mediaQuery.desktop} {
    flex-basis: calc(50% - 1rem);
    flex-grow: 0.5;
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
  min-height: 16rem;

  &:last-of-type {
    display: none;
  }

  ${mediaQuery.tablet} {
    flex-basis: calc(40% - 1rem);
    flex-grow: 0.4;
    min-height: 12rem;
    max-height: 16rem;
  }

  ${mediaQuery.desktop} {
    flex-basis: calc(25% - 1rem);
    flex-grow: 0.25;

    &:last-of-type {
      display: block;
    }
  }
`

export const contentContainerStyles = css`
  margin: 0;
  line-height: 1.75;

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
