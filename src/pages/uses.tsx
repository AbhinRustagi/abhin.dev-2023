import { GetStaticPropsContext } from 'next'
import { uses } from '~/data'

export default function Uses(props: any) {
  return <></>
}

export function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: { ...uses },
  }
}
