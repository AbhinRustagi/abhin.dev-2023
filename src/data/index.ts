import * as blog from './blog'
import * as books from './books'
import * as colophon from './colophon'
import * as home from './home'
import * as insider from './insider'
import * as me from './me'
import * as uses from './uses'

export const menus = [
  me.metadata,
  blog.metadata,
  insider.metadata,
  books.metadata,
]

export const footerInformationMenu = [
  home.metadata,
  me.metadata,
  blog.metadata,
  insider.metadata,
  books.metadata,
  colophon.metadata,
  uses.metadata,
]

export * from './seo'
export * from './socials'
export { home, me, blog, books, colophon, uses, insider }
