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
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: column-reverse;

  ${mediaQuery.tablet} {
    flex-direction: row;
  }
`

const HeroTitleWrapper = styled.div`
  padding: 1.5rem;
  border: 4px dashed ${(props) => props.theme.colors.gray};
  flex-grow: 1;
  flex-basis: 100%;

  ${mediaQuery.tablet} {
    flex-basis: calc(60% - 1rem);
    flex-grow: 0.6;
  }

  ${mediaQuery.desktop} {
    flex-basis: calc(50% - 1rem);
    flex-grow: 0.5;
  }
`

const baseImageWrapperStyles = css`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`

const HeroImageWrapper = styled.div`
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

const AboutHero = () => {
  return (
    <HeroWrapper>
      <HeroGridWrapper>
        <HeroTitleWrapper>
          <h1>
            Hi again, I am Abhin – a developer with a passion for crafting
            intuitive digital products through creative problem-solving.
          </h1>
        </HeroTitleWrapper>
        <HeroImageWrapper>
          <Image
            src="/portrait.jpeg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
        </HeroImageWrapper>
        <HeroImageWrapper>
          <Image
            src="/mountain.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
        </HeroImageWrapper>
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

const AboutContent = () => {
  return (
    <section>
      <ContentContainer css={contentContainerStyles}>
        <h2 id="study">Study</h2>
        <p>
          I completed my undergraduate studies from the University of Delhi,
          completing a Bachelor of Science honours degree in Statistics, from
          2019 to 2022.
        </p>
        <p>
          However, as the pandemic struck the world in 2020, I started
          experimenting with programming, and web development. In a matter of
          months, my affinity towards the field grew manyfold. Through online
          courses, YouTube videos, and reading through many Github repositories,
          I developed my skills. In 2021, I formally decided to take up software
          development as a career.
        </p>
        <h2 id="experience">Experience</h2>
        <p>
          The zest to build & create, for me, started as a childish whim, and a
          creative outlet. In 2021, it grew strong enough for me to start
          working as a developer.
        </p>
        <p>
          I developed the first ever online internship portal for my college,
          and I have been enjoying the rail-ride since. I started working as a
          freelancer, and as an intern, maximising my time during the pandemic
          induced lockdown. After interning for three months at{' '}
          <Link
            className="hover underline"
            href="https://openhouse.study?ref=abhin.dev"
          >
            Openhouse
          </Link>
          , I joined them as a Product Engineer in 2022, working with them for
          an year.
        </p>
        <p>
          I have worked with some awesome folks at{' '}
          <Link
            className="hover underline"
            href="https://www.sneakerinvestindia.com/?ref=abhin.dev"
          >
            Sneaker Invest India
          </Link>
          ,{' '}
          <Link
            className="hover underline"
            href="https://www.linkedin.com/company/codee-app/"
          >
            Codee
          </Link>
          ,{' '}
          <Link
            className="hover underline"
            href="https://www.timelyai.com/?ref=abhin.dev"
          >
            TimelyAI
          </Link>
          ,{' '}
          <Link
            className="hover underline"
            href="https://blueoceanglobaltech.com/?ref=abhin.dev"
          >
            Blue Ocean Global Tech (NY)
          </Link>
          ,{' '}
          <Link
            className="hover underline"
            href="https://wetlands.org/?ref=abhin.dev"
          >
            Wetlands International
          </Link>
          , and{' '}
          <Link
            className="hover underline"
            href="https://reworld.eco/?ref=abhin.dev"
          >
            ReWorld Earth
          </Link>
          .
        </p>
        <p>
          Currently working part-time as a voluntary frontend developer at
          ReWorld Earth.
        </p>
        <p>
          Find an exhaustive{' '}
          <Link href="" className="hover underline ext">
            resume here
          </Link>
          .
        </p>
        <h2 id="skills">What all I have played with</h2>
        <ul>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Nextjs</li>
          <li>Python</li>
          <li>Django</li>
          <li>PostgreSQL</li>
          <li>Amazon Web Services</li>
          <li>Google Cloud Platform</li>
        </ul>
        <h2 id="readme">Readme</h2>
        <p>
          Taking inspiration from the READMEs of{' '}
          <Link href="" className="underline">
            Quinn Slack
          </Link>{' '}
          and{' '}
          <Link href="" className="underline">
            Anand Chowdhary
          </Link>
          , I have created a comprehensive guide on collaborating with me, and
          the values I follow.
        </p>
        <p>
          <Link href="" className="underline hover ext">
            You can read it here
          </Link>
        </p>
      </ContentContainer>
    </section>
  )
}

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  )
}
