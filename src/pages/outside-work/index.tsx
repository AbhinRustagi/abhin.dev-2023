import Image from 'next/image'
import Link from 'next/link'
import { ContentContainer } from '~/components'
import { imageGridConfig } from '~/data/outside-work'
import {
  HeroGridWrapper,
  HeroImageWrapper,
  HeroTitleWrapper,
  HeroWrapper,
  contentContainerStyles,
} from './styled'

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
        {imageGridConfig.map((img) => (
          <HeroImageWrapper {...img} key={img.src}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: img.position,
              }}
            />
          </HeroImageWrapper>
        ))}
      </HeroGridWrapper>
    </HeroWrapper>
  )
}

const Intro = () => {
  return (
    <ContentContainer css={contentContainerStyles}>
      <p>Last updated 31 May 2023.</p>
      <p>
        My most fulfilling days consist of enjoying delicious food, exploring
        breathtaking destinations, and making memorable moments with friends. I
        have a deep appreciation for photography, trekking through the majestic
        Himalayas, experimenting with coffee, and going on unique travel
        experiences.
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
