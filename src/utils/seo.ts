import { WEBSITE_BASE_URL } from '~/data'

interface BuildPageSEOProps {
  title: string
  description: string
  path: string
}

export const buildPageSeo = (args: BuildPageSEOProps) => {
  const { title, path, description } = args
  return {
    title,
    description,
    canonical: WEBSITE_BASE_URL + path,
    openGraph: {
      url: WEBSITE_BASE_URL + path,
    },
  }
}
