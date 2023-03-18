export interface WorkItem {
  title: string
  desc: string
  tags: string[]
  date: string
  links?: {
    title: string
    href: string
  }[]
}

export const workItems: WorkItem[] = [
  {
    title: 'Wetlands International',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni minima, expedita cumque ratione dolor facilis? Nobis nostrum necessitatibus aut reprehenderit consectetur dolorem voluptates dolores vitae eum ducimus. Nam, culpa voluptatibus?',
    tags: ['freelance', 'react', 'firebase'],
    date: 'August, 2021',
  },
  {
    title: 'Internship Fair Portal',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni minima, expedita cumque ratione dolor facilis? Nobis nostrum necessitatibus aut reprehenderit consectetur dolorem voluptates dolores vitae eum ducimus. Nam, culpa voluptatibus?',
    tags: ['freelance', 'react', 'firebase'],
    date: 'February, 2021',
  },
]
