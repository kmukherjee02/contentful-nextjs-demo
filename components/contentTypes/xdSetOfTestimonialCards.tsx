import XDTestimonialCard from "./xdTestimonialCard";
import dynamic from 'next/dynamic';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic( () => import('react-owl-carousel'), {ssr: false});

interface IXDSetOfTestimonialCardsProps {
	entry: Record<string, any>;
}
const XDSetOfTestimonialCards = ({entry}: IXDSetOfTestimonialCardsProps) => {
    const { testimonialCards }: Record<string, any> = entry;
    
    const testimonialCard: JSX.Element = testimonialCards.map((item: Record<string, any>, index: number) => {
        return ( 
            <XDTestimonialCard entry={item.fields} key={index} />
        )
    });

    return (
        <div className='container mx-auto md:pt-24 pt-12 pb-12'>
            <div className='text-center'>
                <h6>
                    {entry.caption}
                </h6>
                <h2 className='font-extrabold'>
                    {entry.title}
                </h2>
            </div>
            <div className='py-12'>
                <OwlCarousel 
                    className='owl-theme'
                    loop={true}
                    mouseDrag={true}
                    responsiveRefreshRate={0}
                    autoplay={true}
                    autoplayTimeout={7000}
                    autoplaySpeed={1000}
                    autoplayHoverPause={true}
                    margin={20}
                    dots={true}
                    responsive={{
                        '0': {items: 1},
                        '600': {items:2},
                        '1200': {items:3},
                    }}
                >
                    {testimonialCard}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default XDSetOfTestimonialCards;