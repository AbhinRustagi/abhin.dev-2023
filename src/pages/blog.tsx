import { GetStaticPropsContext } from 'next'

export default function Blog(props: any) {
  return <></>
}

export function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {},
  }
}
