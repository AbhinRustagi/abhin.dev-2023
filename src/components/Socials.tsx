import styled from '@emotion/styled'
import type { IconType } from 'react-icons'
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { HiDocumentText } from 'react-icons/hi'
import { makeKey } from '~/utils'

const Wrapper = styled.div`
  display: flex;
`

const StyledLink = styled(Link)`
  display: block;
  height: 2rem;
  width: 2rem;
  padding: 0.375rem;
  cursor: pointer;
`

const BuildSocialIcon = (icon: IconType) => styled(icon)`
  width: 1.25rem;
  height: 1.25rem;
`

interface Social {
  name: string
  link: string
  icon: IconType
}

const socials: Social[] = [
  {
    name: 'Email',
    link: 'mailto:hi@abhin.dev',
    icon: FaEnvelope,
  },
  {
    name: 'CV',
    link: '',
    icon: HiDocumentText,
  },
  {
    name: 'Github',
    link: 'https://github.com/abhinrustagi',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/abhinrustagi',
    icon: FaLinkedinIn,
  },
  {
    name: 'Twitter',
    link: 'https://www.twitter.com/abhinrustagi',
    icon: FaTwitter,
  },
]

export const Socials = () => {
  return (
    <Wrapper>
      {socials.map((social) => {
        const Icon = BuildSocialIcon(social.icon)
        return (
          <StyledLink href={social.link} key={social.name}>
            <Icon />
          </StyledLink>
        )
      })}
    </Wrapper>
  )
}
