import { NextSeoProps } from 'next-seo'

export interface PageMetadata extends NextSeoProps {
  path: string
}

export interface PageData {
  metadata: PageMetadata
  data: any
}
