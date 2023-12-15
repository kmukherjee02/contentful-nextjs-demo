import Image, { ImageProps } from 'next/image'

const contentfulLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 75}&fm=webp`
}

const ContentfulImage = (props: ImageProps) => {
  return <Image loader={contentfulLoader} {...props} alt={props.alt}/>
}

export default ContentfulImage
