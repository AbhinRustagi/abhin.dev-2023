import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ContentContainer, Container } from '~/components'
import { aboutImages } from '~/data/about'
import {
  HeroGridWrapper,
  HeroImageWrapper,
  HeroTitleWrapper,
  HeroWrapper,
  contentContainerStyles,
} from './styled'

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
        {aboutImages.map((image) => (
          <HeroImageWrapper key={image.alt}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: image.position,
              }}
            />
          </HeroImageWrapper>
        ))}
      </HeroGridWrapper>
    </HeroWrapper>
  )
}

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
            target="_blank"
            rel="noopener"
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
            target="_blank"
            rel="noopener"
          >
            Sneaker Invest India
          </Link>
          ,{' '}
          <Link
            className="hover underline"
            href="https://www.linkedin.com/company/codee-app/"
            target="_blank"
            rel="noopener"
          >
            Codee
          </Link>
          ,{' '}
          <Link
            className="hover underline"
            href="https://www.timelyai.com/?ref=abhin.dev"
            target="_blank"
            rel="noopener"
          >
            TimelyAI
          </Link>
          ,{' '}
          <Link
            className="hover underline"
            href="https://blueoceanglobaltech.com/?ref=abhin.dev"
            target="_blank"
            rel="noopener"
          >
            Blue Ocean Global Tech (NY)
          </Link>
          ,{' '}
          <Link
            className="hover underline"
            href="https://wetlands.org/?ref=abhin.dev"
            target="_blank"
            rel="noopener"
          >
            Wetlands International
          </Link>
          , and{' '}
          <Link
            className="hover underline"
            href="https://reworld.eco/?ref=abhin.dev"
            target="_blank"
            rel="noopener"
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
          <Link
            href=""
            target="_blank"
            rel="noopener"
            className="hover underline ext"
          >
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
          <Link
            href=""
            target="_blank"
            rel="noopener"
            className="underline hover ext"
          >
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
