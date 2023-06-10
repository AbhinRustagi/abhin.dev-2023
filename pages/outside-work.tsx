import { outsideWorkData } from '~/data'
import OutsideWork from '~/pages/outside-work'

export default function OutsideWorkPage() {
  return <OutsideWork />
}

export async function getStaticProps() {
  return {
    props: {
      seo: outsideWorkData.seo,
    },
  }
}
