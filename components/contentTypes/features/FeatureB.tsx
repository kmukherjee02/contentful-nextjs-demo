import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import XDIcon from '@components/contentTypes/xdIcon';
import XDLink from '@components/contentTypes/xdLink';
import { XDSetOfFeaturesProps } from 'types';

export default function FeatureB({ entry }: XDSetOfFeaturesProps) {
    const { fields, sys } = entry;

	const inspectorProps = useContentfulInspectorMode({});

	const setId = sys.id as string;
	const title = fields.title;
	const description = fields.description;
	const link = fields.link;

	const features =
		Array.isArray(fields.features) &&
		fields.features.map(feature => {
			if (!feature || !feature.fields) return null;
			const featureTitle = feature.fields.title;
			const featureDescription = feature.fields.description;
			const featureLink = feature.fields.link;
			const featureIcon = feature.fields.icon;
			return (
				<div
					className='p-4 md:w-1/3 flex flex-col text-center items-center'
					key={feature.sys.id}
					{...inspectorProps({
						entryId: feature?.sys?.id,
						fieldId: 'title',
					})}>
					{featureLink && featureIcon?.fields && (
						<div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
							<XDIcon entry={featureIcon} id={featureIcon.sys.id} />
						</div>
					)}
					<div className='flex-grow'>
						<h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
							{featureTitle}
						</h2>
						<p className='leading-relaxed text-base'>
							{featureDescription}
						</p>
						{featureLink && featureLink.fields && (
							<XDLink entry={featureLink} />
						)}
					</div>
				</div>
			);
		});
	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='text-center mb-20'>
					<h1
						className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'
						{...inspectorProps({
							entryId: setId,
							fieldId: 'title',
						})}>
						{title}
					</h1>
					<p
						className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'
						{...inspectorProps({
							entryId: setId,
							fieldId: 'description',
						})}>
						{description}
					</p>
					<div className='flex mt-6 justify-center'>
						<div className='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
					</div>
				</div>
				<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
					{features}
				</div>
				{link && (
					<button
						className='flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
						{...inspectorProps({
							entryId: setId,
							fieldId: 'link',
						})}>
						Button
					</button>
				)}
			</div>
		</section>
	);
}
