import styled from '@emotion/styled'
import { WorkItem as WorkItemProps } from '~/data/work'
import { FiTarget } from 'react-icons/fi'
import { css } from '@emotion/react'
import { makeKey } from '~/utils'
import { mediaQuery } from '~/styles'

export const WorkItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 0;
`

const Wrapper = styled.div`
  margin-bottom: 3rem;

  ${mediaQuery.tablet} {
    flex-basis: calc(50% - 0.75rem);

    &:nth-child(2n + 1) {
      margin-right: 1.5rem;
    }
  }
`

const dateAndTitleWrapperStyles = css`
  span.date {
    display: block;
    font-size: 0.875rem;
  }

  h2 {
    color: #dbe4c6;
  }
`

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.div`
  display: block;
  width: max-content;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid gray;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`

export const WorkItem: React.FC<WorkItemProps> = (props) => {
  return (
    <Wrapper>
      <div css={dateAndTitleWrapperStyles}>
        <h2>{props.title}</h2>
        <span className="date">{props.date}</span>
      </div>
      <p>{props.desc}</p>
      <TagsWrapper>
        {props.tags.map((tag) => (
          <Tag key={makeKey(props.title, props.date, tag)}>{tag}</Tag>
        ))}
      </TagsWrapper>
    </Wrapper>
  )
}
