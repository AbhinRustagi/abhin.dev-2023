import { NextSeoProps } from 'next-seo'

export interface PageMetadata extends NextSeoProps {
  path: string
}

export interface PageData {
  metadata: PageMetadata
  data: any
}

type SegmentType =
  | 'tricard' // Three Cards in a row
  | 'two-one' // 2 Cards with 2:1 ratio in that order
  | 'one-two' // 2 Card with 1:2 ratio in that order
  | 'full' // Full Width Card
  | 'two-one-one' // Left Card of size 2/3, remaining two cards stacked vertically

interface Card {
  type: ''
}

interface TriCardSegment {
  type: 'tricard'
  content: [Card, Card, Card]
}

interface TwoOneSegment {
  type: 'two-one'
  content: [Card, Card]
}

interface OneTwoSegment extends Omit<TwoOneSegment, 'type'> {
  type: 'one-two'
}

interface FullSegment {
  type: 'full'
  content: Card
}

interface TwoOneOneSegment extends Omit<TriCardSegment, 'type'> {
  type: 'two-one-one'
}

export type PageLayoutConfig = (
  | TriCardSegment
  | TwoOneSegment
  | OneTwoSegment
  | FullSegment
  | TwoOneOneSegment
)[]
