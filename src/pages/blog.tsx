import { blog } from '~/data'

export default function Blog() {
  return <></>
}

export function getStaticProps() {
  return {
    props: { ...blog },
  }
}
