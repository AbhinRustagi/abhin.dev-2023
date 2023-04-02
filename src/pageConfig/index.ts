import homeConfig from './home'

export interface RouteData {
  title: string
  path: string
  slug: string
  config: any
}

export const routes: RouteData[] = [
  {
    title: 'Home',
    path: '/',
    slug: '',
    config: homeConfig,
  },
  {
    title: 'Me',
    path: '/me',
    slug: 'me',
    config: {},
  },
  {
    title: 'Blog',
    path: '/blog',
    slug: 'blog',
    config: {},
  },
  {
    title: 'Misc.',
    path: '/misc',
    slug: 'misc',
    config: {},
  },
]
