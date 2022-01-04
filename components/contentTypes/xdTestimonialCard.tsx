
interface IXTestimonialCardProps {
	entry: Record<string, any>;
}
const XDTestimonialCard = ({entry} : IXTestimonialCardProps) => {
    const {name, testimonial, rating, receivedFrom}: Record<string, any> = entry;
    const {designation, image} : Record<string, any> = receivedFrom.fields;
    const imgSrc : string  = image.fields.file.url;
    console.log(receivedFrom)

    return (
        <div>
            <p>{name}</p>
            <p>{testimonial}</p>
            <p>{rating}</p>
            <p>{designation}</p>
            <p>{imgSrc}</p>
        </div>
    )
}

export default XDTestimonialCard ;