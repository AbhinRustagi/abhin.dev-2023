import { WorkItem } from '~/components'
import { Socials } from '~/components/Socials'
import { workItems } from '~/data/work'
import kebabCase from 'lodash/kebabCase'

export default function Home() {
  return (
    <>
      <h1 className="accent">Hello, there. I am Abhin. 👋</h1>
      <p>
        I am a software engineer, with 2 years of experience. I enjoy developing
        user-focused products.
      </p>
      <Socials />
      {workItems.map((item) => (
        <WorkItem {...item} key={kebabCase(item.title)} />
      ))}
    </>
  )
}
