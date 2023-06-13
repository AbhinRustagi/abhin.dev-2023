import styled from '@emotion/styled'
import { Button } from './Button'
import Link from 'next/link'
import { makeKey } from '~/utils'
import { mediaQuery } from '~/theme'
import { css } from '@emotion/react'

const BaseWrapper = styled.div`
  border-radius: 4px;
  padding: 1.5rem;

  &.border-accent {
    border: 1px solid ${(props) => props.theme.colors.accent};
  }
  &.border-gray {
    border: 1px solid ${(props) => props.theme.colors.grayTranslucent};
  }
`

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`

const Body = styled.p`
  margin: 1rem 0;
`

const Metadata = styled.p`
  font-size: 0.875rem;
`

const Tags = {
  wrapper: styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
  `,
  item: styled.div`
    border-radius: 1rem;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
    ${(props) => {
      const bg = props.theme.colors.accentTranslucent
      const color = props.theme.colors.accent
      return css`
        background-color: ${bg};
        color: ${color};
      `
    }}

    &:not(:last-of-type) {
      margin-right: 0.5rem;
    }
  `,
}

interface BlogCardProps {
  title: string
  link: string
  date: string
  readDuration: string
}

interface ProjectCardProps {
  title: string
  type: string
  role: string
  link?: string
  description: string
  tags: string[]
}

export const BlogCard = (props: BlogCardProps) => {
  const { title, link, date, readDuration } = props

  return (
    <BaseWrapper className="border-accent">
      <Title>{title}</Title>
      <Body>
        {date} • {readDuration} read
      </Body>
      <Button href={link}>Read the article →</Button>
    </BaseWrapper>
  )
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, link, description, tags, type, role } = props

  return (
    <BaseWrapper className="border-gray">
      <Title>
        {link ? (
          <Link className="ext" href={link}>
            {title}
          </Link>
        ) : (
          title
        )}
      </Title>
      <Metadata>
        {role} • {type}
      </Metadata>
      <Body>{description}</Body>
      <Tags.wrapper>
        {tags.map((tag) => (
          <Tags.item key={makeKey(title, 'tags', tag)}>{tag}</Tags.item>
        ))}
      </Tags.wrapper>
    </BaseWrapper>
  )
}
