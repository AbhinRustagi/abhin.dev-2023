import Image from 'next/image'
import { MainComponent } from '~/types'
import { makeKey } from '~/utils'
import { Description, ImageWrapper, MainHeader } from './styled'

export const Main: MainComponent = (props) => {
  const { title, description, image, children } = props

  return (
    <main>
      {title && (
        <MainHeader>
          {image && (
            <ImageWrapper>
              <Image src={image} alt={makeKey(title)} fill />
            </ImageWrapper>
          )}
          <h1>{title}</h1>
          {description && <Description>{description}</Description>}
        </MainHeader>
      )}
      <div>{children}</div>
    </main>
  )
}
