import { GetStaticPropsContext } from 'next'
import { colophon } from '~/data'

export default function Colophon(props: any) {
  return <></>
}

export function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: { ...colophon },
  }
}
