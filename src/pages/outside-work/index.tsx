import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { ContentContainer } from '~/components'
import { mediaQuery } from '~/theme'

const HeroWrapper = styled.section`
  margin-bottom: 6rem;
`

const HeroGridWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(2, 1fr);

  ${mediaQuery.tablet} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(7, 1fr);
  }
`

const HeroTitleWrapper = styled.div`
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

const baseImageWrapperStyles = css`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`

const imageConfig = [
  {
    src: '/5.jpg',
    lg: {
      row: '1 / 2',
      col: '1 / 3',
    },
    sm: {
      row: '1 / 3',
      col: '1 / 2',
    },
    position: 'center',
    alt: '',
  },
  {
    src: '/6.jpg',
    lg: {
      row: '1 / 2',
      col: '3 / 6',
    },
    sm: {
      row: '1 / 3',
      col: '2 / 3',
    },
    position: 'bottom center',
    alt: '',
  },
  {
    src: '/1.jpg',
    lg: {
      row: '2 / 3',
      col: '4 / 6',
    },
    sm: {
      row: '5 / 7',
      col: '1 / 2',
    },
    position: 'bottom',
    alt: '',
  },
  {
    src: '/2.jpeg',
    lg: {
      row: '1 / 3',
      col: '6 / 8',
    },
    sm: {
      row: '5 / 7',
      col: '2 / 3',
    },
    position: 'bottom left',
    alt: '',
  },
]

const HeroImageWrapper = styled.div<{
  lg: { row: string; col: string }
  sm: { row: string; col: string }
}>`
  ${baseImageWrapperStyles}
  min-height: 8rem;
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

const OutsideWorkHero = () => {
  return (
    <HeroWrapper>
      <HeroGridWrapper>
        <HeroTitleWrapper>
          <h1>
            &quot;When was the last time you did something for the first
            time?&quot;
            <br /> – John Maxwell
          </h1>
        </HeroTitleWrapper>
        {imageConfig.map((img) => (
          <HeroImageWrapper {...img} key={img.src}>
            <Image
              src={img.src}
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: img.position }}
            />
          </HeroImageWrapper>
        ))}
        {/* <HeroImageWrapper>
          <Image
            src="/mountain.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
        </HeroImageWrapper> */}
      </HeroGridWrapper>
    </HeroWrapper>
  )
}

const contentContainerStyles = css`
  margin: 0;
  line-height: 1.75;

  p {
    margin: 1.5rem 0;
  }
`

const Intro = () => {
  return (
    <ContentContainer css={contentContainerStyles}>
      <p>
        My most fulfilling days consist of enjoying delicious food, exploring
        breathtaking destinations, and making memorable moments with friends. I
        have a deep appreciation for photography, trekking through the majestic
        Himalayas, experimenting with coffee, and going on unique travel
        experiences.
      </p>
      <p>
        I came across the YouTube channel{' '}
        <Link href="" className="underline hover">
          Yes! Theory
        </Link>
        , and it has been difficult to say no to newer experiences since then.
      </p>
    </ContentContainer>
  )
}

export default function OutsideWork() {
  return (
    <>
      <OutsideWorkHero />
      <Intro />
    </>
  )
}
