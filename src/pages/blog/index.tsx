import { BlogCard } from '~/components'
import { blogItems } from '~/data/blog'
import { makeKey } from '~/utils'
import { StyledListItem, StyledListWrapper } from './styled'

export default function Blog() {
  return (
    <section>
      <h1>I seldom pen down my thoughts about anything or everything.</h1>
      <StyledListWrapper>
        {blogItems.map((blogItem) => (
          <StyledListItem key={makeKey('blog', blogItem.title)}>
            <BlogCard {...blogItem} />
          </StyledListItem>
        ))}
      </StyledListWrapper>
    </section>
  )
}
