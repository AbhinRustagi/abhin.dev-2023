import { HiDocumentText } from 'react-icons/hi'
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa'
import { SocialItem } from '~/types'

export const socials: SocialItem[] = [
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
