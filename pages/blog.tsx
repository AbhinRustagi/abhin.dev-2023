import { blogPageData } from '~/data'
import Blog from '~/pages/blog'

export default function BlogPage() {
  return <Blog />
}

export async function getStaticProps() {
  return {
    props: {
      seo: blogPageData.seo,
    },
  }
}
