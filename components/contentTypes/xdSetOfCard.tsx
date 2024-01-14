import { ContentfulLivePreview } from '@contentful/live-preview';
import XDCard from '@components/contentTypes/xdCard';
import { XDSetOfCardProps } from 'types';

export default function XdSetOfCard({ entry }: XDSetOfCardProps) {
	const { fields, sys } = entry;

	const contentfulInspectorProps = { entryId: sys?.id };

	const cards = fields.cards
		? fields.cards.map((card) => {
				if (card) return <XDCard entry={card} key={card.sys.id} />;
		  })
		: [];

	return (
		<>
			{cards.length && (
				<section className='container mx-auto body-font py-24'>
					<div className=' px-5'>
						{(fields.title || fields.caption) && (
							<div className='text-center'>
								{fields.caption && (
									<h6
										{...ContentfulLivePreview.getProps({
											...contentfulInspectorProps,
											fieldId: 'caption',
										})}
									>
										{fields.caption}
									</h6>
								)}
								{fields.title && (
									<h2
										className='font-extrabold'
										{...ContentfulLivePreview.getProps({
											...contentfulInspectorProps,
											fieldId: 'title',
										})}
									>
										{fields.title}
									</h2>
								)}
							</div>
						)}
						<div
							className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'
							{...ContentfulLivePreview.getProps({
								...contentfulInspectorProps,
								fieldId: 'cards',
							})}
						>
							{cards}
						</div>
					</div>
				</section>
			)}
		</>
	);
}
