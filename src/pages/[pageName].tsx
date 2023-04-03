import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import { Layout } from '~/components'
import { PageData, routes } from '~/data'

interface GetStaticPropsContextModified extends GetStaticPropsContext {
  params: {
    pageName: string
  }
}

export default function Page(props: PageData) {
  return <Layout {...props} />
}

export function getStaticProps(
  context: GetStaticPropsContextModified
): GetStaticPropsResult<PageData> {
  const page = routes.find(
    (route) => route.metadata.title?.toLowerCase() === context.params.pageName
  )

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: { ...page },
  }
}

export function getStaticPaths(): GetStaticPathsResult {
  const paths = routes.map((route) => ({
    params: { pageName: route.metadata.title?.toLowerCase() },
  }))

  return {
    paths,
    fallback: false,
  }
}
