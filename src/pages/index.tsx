import { GetStaticPropsContext } from 'next'

export default function Home(props: any) {
  return <></>
}

export function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {},
  }
}
