import { GetStaticPropsContext } from 'next'
import { books } from '~/data'

export default function Books(props: any) {
  return <></>
}

export function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: { ...books },
  }
}
