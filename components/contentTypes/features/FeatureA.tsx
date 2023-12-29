import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import XDIcon from '@components/contentTypes/xdIcon';
import XDLink from '@components/contentTypes/xdLink';
import { XDSetOfFeaturesProps } from 'types';

export default function FeatureA({ entry }: XDSetOfFeaturesProps) {
    const { fields, sys } = entry;

	const inspectorProps = useContentfulInspectorMode({});
	const setId = sys.id as string;

	//console.log(entry);
	const title = fields.title;

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
					className='p-4 md:w-1/3 flex'
					key={feature.sys.id}
					{...inspectorProps({
						entryId: feature?.sys?.id,
						fieldId: 'title',
					})}>
					{featureLink && featureIcon?.fields && (
						<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0'>
							<XDIcon entry={featureIcon} id={featureIcon.sys.id} />
						</div>
					)}
					<div className='flex-grow pl-6'>
						<h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
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
				<h1
					className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20'
					{...inspectorProps({ entryId: setId, fieldId: 'title' })}>
					{title}
				</h1>
				<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
					{features}
				</div>
			</div>
		</section>
	);
}
