import { aboutPageData } from '~/data'
import About from '~/pages/about'

export default function AboutPage() {
  return <About />
}

export async function getStaticProps() {
  return {
    props: {
      seo: aboutPageData.seo,
    },
  }
}
