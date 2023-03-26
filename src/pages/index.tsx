import Script from 'next/script'
import { WorkItem, WorkItemsWrapper } from '~/components'

import { Socials } from '~/components/Socials'
import { workItems } from '~/data/work'
import { makeKey } from '~/utils'

export default function Home() {
  return (
    <>
      <h1 className="accent">Hello, there. I am Abhin. 👋</h1>
      <p>
        I am a software engineer, with 2 years of experience. I enjoy developing
        user-focused products.
      </p>
      <Socials />
      <WorkItemsWrapper>
        {workItems.map((item) => (
          <WorkItem {...item} key={makeKey(item.title, item.date)} />
        ))}
      </WorkItemsWrapper>
      <div id="wcb" className="carbonbadge wcb-d"></div>
      <Script
        src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
        defer
      />
    </>
  )
}
