import styled from '@emotion/styled'
import { Button } from './Button'

const BaseWrapper = styled.div`
  border-radius: 4px;
  padding: 1.5rem;

  &.border {
    border: 1px solid ${(props) => props.theme.colors.graySelection};
  }
`

const CardTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const CardBody = styled.p`
  margin: 1rem 0;
`

interface BlogCardProps {
  title: string
  link: string
  date: string
  readDuration: string
}

export const BlogCard = (props: BlogCardProps) => {
  const { title, link, date, readDuration } = props

  return (
    <BaseWrapper className="border">
      <CardTitle>{title}</CardTitle>
      <CardBody>
        {date} • {readDuration} read
      </CardBody>
      <Button href={link}>Read the article →</Button>
    </BaseWrapper>
  )
}
