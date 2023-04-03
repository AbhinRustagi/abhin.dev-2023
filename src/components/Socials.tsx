import styled from '@emotion/styled'
import { Tooltip } from 'react-tooltip'
import type { IconType } from 'react-icons'
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { HiDocumentText } from 'react-icons/hi'
import { makeKey } from '~/utils'
import React from 'react'
import { css } from '@emotion/react'

interface Social {
  name: string
  link: string
  icon: IconType
  tooltip: string
  hovercolor: string
}

const socials: Social[] = [
  {
    name: 'Email',
    link: 'mailto:hi@abhin.dev',
    icon: FaEnvelope,
    tooltip: 'hi@abhin.dev',
    hovercolor: '#57C5B6',
  },
  {
    name: 'CV',
    link: '',
    icon: HiDocumentText,
    tooltip: 'CV',
    hovercolor: '#FFD966',
  },
  {
    name: 'Github',
    link: 'https://github.com/abhinrustagi',
    icon: FaGithub,
    tooltip: '@AbhinRustagi',
    hovercolor: '#4078c0',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/abhinrustagi',
    icon: FaLinkedinIn,
    tooltip: 'in/abhinrustagi',
    hovercolor: '#0072b1',
  },
  {
    name: 'Twitter',
    link: 'https://www.twitter.com/abhinrustagi',
    icon: FaTwitter,
    tooltip: '@abhinrustagi',
    hovercolor: '#00acee',
  },
]

const Wrapper = styled.div`
  display: flex;
`

const StyledLink = styled(Link)<{ hovercolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  padding: 0.375rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray};

  &:hover {
    color: ${(props) => props.hovercolor || props.theme.colors.title};
  }
`

const tooltipStyles = css`
  font-size: 0.75rem;
  font-weight: 500;
`

const BuildSocialIcon = (icon: IconType) => styled(icon)`
  width: 1.25rem;
  height: 1.25rem;
  transition-duration: 0.1ms;
`

export const Socials = () => {
  return (
    <Wrapper>
      {socials.map((social) => {
        const Icon = BuildSocialIcon(social.icon)

        const idnKey = makeKey('socials', social.name)

        return (
          <React.Fragment key={idnKey}>
            <StyledLink
              data-tooltip-id={idnKey}
              data-tooltip-content={social.tooltip}
              href={social.link}
              hovercolor={social.hovercolor}
              rel="noopener"
              target="_blank"
            >
              <Icon />
            </StyledLink>
            <Tooltip id={idnKey} css={tooltipStyles} />
          </React.Fragment>
        )
      })}
    </Wrapper>
  )
}
