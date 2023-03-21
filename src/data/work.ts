export interface WorkItem {
  title: string
  desc: string
  tags: string[]
  date: string
  links?: {
    title: string
    href: string
  }[]
  searchKey: 'work' | 'project'
}

export const workItems: WorkItem[] = [
  {
    title: 'Openhouse',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni minima, expedita cumque ratione dolor facilis? Nobis nostrum necessitatibus aut reprehenderit ',
    tags: [
      'fulltime',
      'react',
      'python',
      'django',
      'postgres',
      'golang',
      'aws',
    ],
    date: 'July, 2022 - Present',
    searchKey: 'work',
  },
  {
    title: 'Reworld Earth',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni minima, expedita cumque ratione dolor facilis? Nobis nostrum necessitatibus aut reprehenderit consectetur dolorem voluptates dolores vitae eum ducimus. Nam, culpa voluptatibus?',
    tags: ['freelance', 'next.js', 'graphql', 'typescript'],
    date: 'November, 2022 - December, 2022',
    searchKey: 'work',
  },
  {
    title: 'Codee',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni minima, expedita cumque ratione dolor facilis? Nobis nostrum necessitatibus aut reprehenderit consectetur dolorem voluptates dolores vitae eum ducimus. Nam, culpa voluptatibus?',
    tags: ['freelance', 'react', 'next.js', 'typescript', 'figma'],
    date: 'August, 2022 - October, 2022',
    searchKey: 'work',
  },
  {
    title: 'Sneaker Invest India',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni minima, expedita cumque ratione dolor facilis? Nobis nostrum necessitatibus aut reprehenderit consectetur dolorem voluptates dolores vitae eum ducimus. Nam, culpa voluptatibus?',
    tags: ['freelance', 'next.js', 'firebase', 'google api', 'razorpay'],
    date: 'June, 2022 - July, 2022',
    searchKey: 'work',
  },
  {
    title: 'Openhouse',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni minima, expedita cumque ratione dolor facilis? Nobis nostrum necessitatibus aut reprehenderit consectetur dolorem voluptates dolores vitae eum ducimus. Nam, culpa voluptatibus?',
    tags: ['internship', 'next.js', 'typescript'],
    date: 'February, 2022 - April, 2022',
    searchKey: 'work',
  },
  {
    title: 'Wetlands International',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni minima, expedita cumque ratione dolor facilis? Nobis nostrum necessitatibus aut reprehenderit consectetur dolorem voluptates dolores vitae eum ducimus. Nam, culpa voluptatibus?',
    tags: ['freelance', 'react', 'firebase'],
    date: 'August, 2021',
    searchKey: 'work',
  },
  {
    title: 'Internship Fair Portal',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni minima, expedita cumque ratione dolor facilis? Nobis nostrum necessitatibus aut reprehenderit consectetur dolorem voluptates dolores vitae eum ducimus. Nam, culpa voluptatibus?',
    tags: ['freelance', 'react', 'firebase'],
    date: 'February, 2021',
    searchKey: 'work',
  },
]
