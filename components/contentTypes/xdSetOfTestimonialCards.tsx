import XDTestimonialCard from "./xdTestimonialCard";

interface IXDSetOfTestimonialCardsProps {
	entry: Record<string, any>;
}
const XDSetOfTestimonialCards = ({entry}: IXDSetOfTestimonialCardsProps) => {
    console.log(entry);
    const { testimonialCards }: Record<string, any> = entry;
    const testimonialCard: JSX.Element = testimonialCards.map((item: Record<string, any>, index: number) => {
        return ( <XDTestimonialCard entry={item.fields} key={index} /> )
    })

    return (
        <div className='pt-24 pb-12'>
            <div className='text-center'>
                <h6 className='font-dosis font-bold text-orange-light uppercase mb-2'>
                    {entry.caption}
                </h6>
                <h2 className='font-dosis font-bold text-5xl'>
                    {entry.title}
                </h2>
            </div>
            <div>
                {testimonialCard}
            </div>

        </div>
    )
}

export default XDSetOfTestimonialCards;