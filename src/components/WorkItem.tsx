import styled from '@emotion/styled'
import { WorkItem as WorkItemProps } from '~/data/work'
import { FiTarget } from 'react-icons/fi'
import { css } from '@emotion/react'
import { makeKey } from '~/utils'

const Wrapper = styled.div`
  margin: 2rem 0;
  display: flex;
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

const iconWrapperStyles = css`
  margin-right: 0.5rem;
  padding-top: 0.3rem;

  svg {
    width: 18px;
    height: 18px;
    color: #dbe4c6;
  }
`

const TagsWrapper = styled.div`
  display: flex;
`

const Tag = styled.div`
  display: block;
  width: max-content;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid gray;
  font-size: 0.75rem;
  margin-right: 0.5rem;
`

export const WorkItem: React.FC<WorkItemProps> = (props) => {
  return (
    <Wrapper>
      <div css={iconWrapperStyles}>
        <FiTarget />
      </div>
      <div>
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
      </div>
    </Wrapper>
  )
}
