import Image from 'next/image';
import { ContentfulImageProps } from 'types';

const ContentfulImage = (props: ContentfulImageProps) => {
  return <Image {...props} src={`https:${props.src}`} alt={props.alt}/>
}

export default ContentfulImage
