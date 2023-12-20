import dynamic from 'next/dynamic';
import XDTestimonialCard from '@components/contentTypes/xdTestimonialCard';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { XDSetOfTestimonialCardsProps } from 'types';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const XDSetOfTestimonialCards = ({ entry }: XDSetOfTestimonialCardsProps) => {
	const {
		fields: { caption, title, testimonialCards },
		sys,
	} = entry;

	const inspectorProps = useContentfulInspectorMode({});
	const setId = sys.id as string;

	const testimonialCard = testimonialCards.map((tCard) => (
		<div
			key={tCard.sys.id}
			{...inspectorProps({
				entryId: tCard?.sys?.id,
				fieldId: 'title',
			})}>
			<XDTestimonialCard entry={tCard} />
		</div>
	));

	return (
		<div className='container mx-auto md:pt-24 pt-12 pb-12'>
			<div className='text-center'>
				<h6 {...inspectorProps({ entryId: setId, fieldId: 'caption' })}>
					{caption}
				</h6>
				<h2
					className='font-extrabold'
					{...inspectorProps({ entryId: setId, fieldId: 'title' })}>
					{title}
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
						'0': { items: 1 },
						'600': { items: 2 },
						'1200': { items: 3 },
					}}>
					{testimonialCard}
				</OwlCarousel>
			</div>
		</div>
	);
};

export default XDSetOfTestimonialCards;
