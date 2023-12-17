import XDCard from './xdCard';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

interface IXDSetOfCardProps {
	entry: {
		cards: Record<string, any>[];
		[key: string]: any;
	};
	sys: Record<string, unknown>;
}

export default function XdSetOfCard({ entry, sys }: IXDSetOfCardProps) {
	const inspectorProps = useContentfulInspectorMode({
		entryId: sys?.id,
	});

	const cards = entry.cards
		? entry.cards.map(
				(
					item: { sys: { id: string }; fields: Record<string, any> },
					index: number
				) => {
					return (
						<XDCard
							entry={item.fields}
							id={item.sys.id}
							key={index}
						/>
					);
				}
		  )
		: [];

	return (
		<>
			{cards.length && (
				<section className='container mx-auto body-font py-24'>
					<div className=' px-5'>
						{(entry.title || entry.caption) && (
							<div className='text-center'>
								{entry.caption && (
									<h6
										{...inspectorProps({
											fieldId: 'caption',
										})}>
										{entry.caption}
									</h6>
								)}
								{entry.title && (
									<h2
										className='font-extrabold'
										{...inspectorProps({
											fieldId: 'title',
										})}>
										{entry.title}
									</h2>
								)}
							</div>
						)}
						<div
							className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'
							{...inspectorProps({ fieldId: 'cards' })}>
							{cards}
						</div>
					</div>
				</section>
			)}
		</>
	);
}
