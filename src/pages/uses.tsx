import { GetStaticPropsContext } from 'next'

export default function Uses(props: any) {
  return <></>
}

export function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {},
  }
}
