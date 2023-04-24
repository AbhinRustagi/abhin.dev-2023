import { HiDocumentText } from 'react-icons/hi'
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa'
import { SocialItem } from '~/types'

const email = {
  name: 'Email',
  link: 'mailto:hi@abhin.dev',
  icon: FaEnvelope,
  tooltip: 'hi@abhin.dev',
  hovercolor: '#57C5B6',
}

const cv = {
  name: 'CV',
  link: '',
  icon: HiDocumentText,
  tooltip: 'CV',
  hovercolor: '#FFD966',
}

const github = {
  name: 'Github',
  link: 'https://github.com/abhinrustagi',
  icon: FaGithub,
  tooltip: '@AbhinRustagi',
  hovercolor: '#4078c0',
}

const linkedin = {
  name: 'LinkedIn',
  link: 'https://www.linkedin.com/in/abhinrustagi',
  icon: FaLinkedinIn,
  tooltip: 'in/abhinrustagi',
  hovercolor: '#0072b1',
}

const twitter = {
  name: 'Twitter',
  link: 'https://www.twitter.com/abhinrustagi',
  icon: FaTwitter,
  tooltip: '@abhinrustagi',
  hovercolor: '#00acee',
}

const literal = {
  name: 'Literal',
  link: 'https://literal.club/abhinrustagi',
  icon: NaN,
  tooltip: '@abhinrustagi',
  hovercolor: '#fff',
}

export const socials: SocialItem[] = [email, cv, github, linkedin, twitter]

export const footerSocials = [email, github, linkedin, twitter, literal]
