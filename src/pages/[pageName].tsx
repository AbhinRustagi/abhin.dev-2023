import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import { Layout } from '~/components'
import { RouteData, routes } from '~/pageConfig'

export default function Page(props: any) {
  return <Layout currentPath={props.path} />
}

export function getStaticProps(
  context: GetStaticPropsContext
): GetStaticPropsResult<RouteData> {
  if (context.params === null) {
    return {
      notFound: true,
    }
  }

  const page = routes.find((route) => route.slug === context.params?.pageName)

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: page,
  }
}

export function getStaticPaths(): GetStaticPathsResult {
  const paths = routes.map((route) => ({ params: { pageName: route.slug } }))

  return {
    paths,
    fallback: false,
  }
}
