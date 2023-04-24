import { me } from '~/data'

export default function Me(props: any) {
  return <></>
}

export function getStaticProps() {
  return {
    props: { ...me },
  }
}
