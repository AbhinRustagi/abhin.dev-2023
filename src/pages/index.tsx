import { Layout, WorkItem, WorkItemsWrapper } from '~/components'

import { Socials } from '~/components/Socials'
import { workItems } from '~/data/work'
import { makeKey } from '~/utils'
import { routes } from '~/data'
import { getWakatimeStats } from '~/requests'

export default function Home() {
  return (
    <>
      <Layout {...routes[0]} />
      {/* <h1 className="accent">Hello, there. I am Abhin. 👋</h1>
      <p>
        I am a software engineer, with 2 years of experience. I enjoy developing
        user-focused products. I am currently building the newer version of my
        personal website. You can find out updated information about me on my
        socials:
      </p>
      <Socials />
      <WorkItemsWrapper>
        {workItems.map((item) => (
          <WorkItem {...item} key={makeKey(item.title, item.date)} />
        ))}
      </WorkItemsWrapper> */}
    </>
  )
}
