import { GetStaticPropsContext } from 'next'
import Image from 'next/image'
import { AboutMeContent, ImageCardWrapper, MeGrid } from '~/components/Cards/Me'

export default function Me(props: any) {
  return (
    <MeGrid>
      <AboutMeContent />
      <ImageCardWrapper>
        <Image
          src="https://images.unsplash.com/photo-1679697399355-be4ed20e4277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
          fill
          alt=""
          style={{ objectFit: 'cover' }}
        />
      </ImageCardWrapper>
    </MeGrid>
  )
}

export function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {},
  }
}
