import styled from '@emotion/styled'
import { mediaQuery } from '~/theme'
import { BaseCard } from './BaseCard'

export const MeGrid = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery.custom(800)} {
    flex-direction: row;
  }
`

const AboutMeContentWrapper = styled(BaseCard)`
  flex-basis: 100%;
  margin-bottom: 1rem;

  ${mediaQuery.custom(800)} {
    flex-basis: calc(70% - 1rem);
    margin-right: 1rem;
    margin-bottom: 0;
  }
`

export const AboutMeContent = () => {
  return (
    <AboutMeContentWrapper>
      <h1>A little bit about me.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        voluptatum numquam placeat. Expedita, aliquam. Ab cumque adipisci facere
        error minus ad, non quasi assumenda. Quibusdam quod molestiae reiciendis
        exercitationem aspernatur. Tempora iste illo quidem officia accusantium
        culpa molestiae fugiat harum inventore, deleniti provident similique
        explicabo rem maiores, numquam aliquam qui architecto illum est quas
        doloribus recusandae et. Voluptatum, maiores totam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        voluptatum numquam placeat. Expedita, aliquam. Ab cumque adipisci facere
        error minus ad, non quasi assumenda. Quibusdam quod molestiae reiciendis
        exercitationem aspernatur. Tempora iste illo quidem officia accusantium
        culpa molestiae fugiat harum inventore, deleniti provident similique
        explicabo rem maiores, numquam aliquam qui architecto illum est quas
        doloribus recusandae et. Voluptatum, maiores totam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        voluptatum numquam placeat. Expedita, aliquam. Ab cumque adipisci facere
        error minus ad, non quasi assumenda. Quibusdam quod molestiae reiciendis
        exercitationem aspernatur. Tempora iste illo quidem officia accusantium
        culpa molestiae fugiat harum inventore, deleniti provident similique
        explicabo rem maiores, numquam aliquam qui architecto illum est quas
        doloribus recusandae et. Voluptatum, maiores totam?
      </p>
    </AboutMeContentWrapper>
  )
}

export const ImageCardWrapper = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
  display: block;
  position: relative;
  height: 0;
  flex-basis: 100%;
  width: 100%;
  padding-bottom: 100%;

  ${mediaQuery.custom(800)} {
    flex-basis: 30%;
    width: 30%;
    padding-bottom: 30%;
  }
`
