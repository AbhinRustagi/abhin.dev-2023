export const HeaderMenu = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Outside work',
    path: '/outside-work',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

export const FooterMenus = [
  {
    title: 'Pages',
    menu: HeaderMenu,
  },
  {
    title: 'Miscellaneous',
    menu: [
      {
        name: 'Bookshelf',
        path: '/bookshelf',
      },
      {
        name: 'Uses',
        path: '/uses',
      },
    ],
  },
  {
    title: 'This Website',
    menu: [
      {
        name: 'Colophon',
        path: '/colophon',
      },
    ],
  },
]
