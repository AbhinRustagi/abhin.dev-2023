import Image from 'next/image'
import { Hero } from './styled'
import Link from 'next/link'

function HeroSection() {
  return (
    <Hero.wrapper>
      <Hero.content>
        <Hero.title>
          An engineer with a love for developing user-first and accessible
          digital products.
        </Hero.title>
        <br />
        <p>
          I&apos;m a software engineer who is always open to opportunities to
          positively improve the human life on scale. With 2 years of experience
          working as a software engineer, the ability to create or innovate
          still excites me just as much as it did when I started.
        </p>
        <p>
          <Link href="/about" className="hover underline">
            Learn about me →
          </Link>
        </p>
      </Hero.content>
      <Hero.image>
        <Image
          src="https://res.cloudinary.com/abhinrustagi/image/upload/v1686372045/abhin-home-hero_oec80e.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
      </Hero.image>
    </Hero.wrapper>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  )
}
