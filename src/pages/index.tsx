import { home } from '~/data'

export default function Home(props: any) {
  return <></>
}

export function getStaticProps() {
  return {
    props: { ...home },
  }
}
