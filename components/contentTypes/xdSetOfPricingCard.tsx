import { useState } from 'react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import XDPricingCard from '@components/contentTypes/xdPricingCard';
import { XDSetOfPricingCardProps } from 'types';

const XDSetOfPricingCard = ({ entry }: XDSetOfPricingCardProps) => {
	const { fields, sys } = entry;

	const inspectorProps = useContentfulInspectorMode({ entryId: sys?.id });

	const [pricingPeriod, setPricingPeriod] = useState('mo');

	const setPricePeriod = (val: string) => {
		setPricingPeriod(val);
	};

	const pricingCards = fields.pricingPlans.map((pricing) => (
		<XDPricingCard
			entry={pricing}
			pricingPeriod={pricingPeriod}
			key={pricing.sys.id}
		/>
	));

	return (
		<>
			<section className='container mx-auto body-font py-24'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						{fields.title && (
							<h1
								className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'
								{...inspectorProps({ fieldId: 'title' })}>
								{fields.title}
							</h1>
						)}

						{fields.description && (
							<p
								className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500'
								{...inspectorProps({ fieldId: 'description' })}>
								{fields.description}
							</p>
						)}

						<div className='flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6'>
							<button
								className={
									pricingPeriod === 'mo'
										? 'py-1 px-4 bg-indigo-500 text-white focus:outline-none'
										: 'py-1 px-4 focus:outline-none'
								}
								onClick={(e) => setPricePeriod('mo')}>
								{fields.pricingPeriod[0]}
							</button>
							<button
								className={
									pricingPeriod === 'annually'
										? 'py-1 px-4 bg-indigo-500 text-white focus:outline-none'
										: 'py-1 px-4 focus:outline-none'
								}
								onClick={(e) => setPricePeriod('annually')}>
								{fields.pricingPeriod[1]}
							</button>
						</div>
					</div>
					<div
						className='flex flex-wrap -m-4'
						{...inspectorProps({ fieldId: 'pricingPlans' })}>
						{/* Repeate Card */}
						{pricingCards}
						{/* Repeate Card */}
					</div>
				</div>
			</section>
		</>
	);
};

export default XDSetOfPricingCard;
