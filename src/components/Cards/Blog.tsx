import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { makeKey } from '~/utils'
import { BaseCard } from './BaseCard'

interface BlogCardProps {
  title: string
  imgSrc: string
  date: string
  href: string
}

const Wrapper = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`

const StyledLink = styled(Link)`
  display: block;
`

const ImageWrapper = styled.div`
  display: block;
  position: relative;
  min-height: 8rem;
  z-index: 2;
`

const CardBodyWrapper = styled(BaseCard)`
  margin-top: -1rem;
  z-index: 4;
  flex-basis: 70%;
  flex-direction: column;
  justify-content: space-between;
`

export const BlogCard: React.FC<BlogCardProps> = (props) => {
  const { title, imgSrc, date, href } = props

  return (
    <Wrapper>
      <StyledLink href={href} target="_blank" rel="noopener">
        <ImageWrapper>
          <Image src={imgSrc} alt={makeKey('blog', title, 'thumbnail')} fill />
        </ImageWrapper>
        <CardBodyWrapper>
          <h2>{title}</h2>
          <p>{date}</p>
        </CardBodyWrapper>
      </StyledLink>
    </Wrapper>
  )
}
