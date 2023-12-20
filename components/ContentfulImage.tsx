import Image from 'next/image'
import { ContentfulImageProps } from 'types'

const contentfulLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 75}&fm=webp`
}

const ContentfulImage = (props: ContentfulImageProps) => {
  return <Image loader={contentfulLoader} {...props} alt={props.alt}/>
}

export default ContentfulImage
