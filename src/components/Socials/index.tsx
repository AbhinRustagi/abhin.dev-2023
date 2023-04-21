import React from 'react'
import { Tooltip } from 'react-tooltip'
import { socials } from '~/data'
import { makeKey } from '~/utils'
import { BuildSocialIcon, Wrapper, StyledLink, tooltipStyles } from './styled'
import { SocialItem } from '~/types'

const buildSocialBtn = (social: SocialItem) => {
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
}

export const Socials = () => {
  return <Wrapper>{socials.map(buildSocialBtn)}</Wrapper>
}
