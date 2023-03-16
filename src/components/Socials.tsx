import styled from '@emotion/styled'
import type { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Wrapper = styled.div`
  display: flex;
`

const SocialButton = styled.div`
  display: flex;
  width: 2.125rem;
  height: 2.125rem;
  position: relative;
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #2b3b49;
  border: 1px solid #2b3b49;
  margin-right: 1rem;

  &:hover {
    background-color: transparent;
    border-color: #f7f1e5;
  }
`

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
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
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/abhinrustagi',
    icon: FaLinkedin,
  },
  {
    name: 'Github',
    link: 'https://github.com/abhinrustagi',
    icon: FaGithub,
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
          <SocialButton key={social.name} title={social.name}>
            <StyledLink href={social.link} target="_blank" rel="noopener">
              <Icon />
            </StyledLink>
          </SocialButton>
        )
      })}
    </Wrapper>
  )
}
