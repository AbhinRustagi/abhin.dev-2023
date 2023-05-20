import { ContentContainer } from '~/components'
import { contentContainerStyles, StyledItem } from './styled'
import { blogItems } from '~/data/blog'
import { makeKey } from '~/utils'
import Link from 'next/link'

export default function Blog() {
  return (
    <section>
      <h1>I seldom pen down my thoughts about everything or anything.</h1>
      <ContentContainer css={contentContainerStyles}>
        <ul>
          {blogItems.map((blogItem) => (
            <StyledItem key={makeKey('blog', blogItem.title)}>
              <p>
                <Link
                  href={blogItem.link}
                  rel="noopener"
                  target="_blank"
                  className="hover"
                >
                  {blogItem.title}
                </Link>
              </p>
              <span>
                {blogItem.date} • {blogItem.duration} read
              </span>
            </StyledItem>
          ))}
        </ul>
      </ContentContainer>
    </section>
  )
}
