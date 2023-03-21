import { WorkItem } from '~/components'
import { Socials } from '~/components/Socials'
import { workItems } from '~/data/work'
import { makeKey } from '~/utils'

export default function About() {
  return (
    <>
      <h1 className="accent">Hello, again! 👋</h1>
      <p>
        As an end-to-end product designer, I love solving problems through
        simplifying the complexity and translating data-driven strategy to
        intuitive design. I contribute to designing new features and optimising
        existing products from start to finish. This includes interviewing users
        for research and testing, creating workshops, user flows, wireframes,
        prototypes and dev-ready final designs.
      </p>
      <p>
        Currently, I’m a Product Engineer at Openhouse, where we develop
        powerful technology to help Australian Super Funds deliver outstanding
        outcomes to customers. After hours, I make some exciting things for the
        internet.
      </p>
      <p>
        I live in New Delhi, India, where I spend my free time exploring its
        beautiful nature and searching good coffee and good vibes. One of my
        favourite things to do is watching sun rise at Coogee beach.
      </p>
      <p>Shoot me a message for a coffee or chat ✌</p>
    </>
  )
}
