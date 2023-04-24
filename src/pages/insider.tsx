import { GetStaticPropsContext } from 'next'
import { insider } from '~/data'

export default function Insider(props: any) {
  return <></>
}

export function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: { ...insider },
  }
}
