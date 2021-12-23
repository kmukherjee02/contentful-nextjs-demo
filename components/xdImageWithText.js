import ContentfulImage from "./contentful-image"

export default function XDImageWithText({entry}){
    return (
        <>
            <ContentfulImage 
                src={entry.image.fields.file.url} 
                width={500}
                height={400}
                alt={entry.image.fields.file.title}
            />
        </>
    )
}