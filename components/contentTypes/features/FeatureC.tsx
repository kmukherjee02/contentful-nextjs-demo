import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import ContentfulImage from '@components/ContentfulImage';
import XDIcon from '@components/contentTypes/xdIcon';
import XDLink from '@components/contentTypes/xdLink';
import { XDSetOfFeaturesProps } from 'types';

export default function FeatureC({ entry }: XDSetOfFeaturesProps) {
	const { fields, sys } = entry;

	const inspectorProps = useContentfulInspectorMode({});
	const setId = sys.id;
	const image = fields.image;

	const features =
		Array.isArray(fields.features) &&
		fields.features.map((feature) => {
			if (!feature || !feature.fields) return null;
			const featureTitle = feature.fields.title;
			const featureDescription = feature.fields.description;
			const featureLink = feature.fields.link;
			const featureIcon = feature.fields.icon;

			return (
				<div
					className='flex flex-col mb-10 lg:items-start items-center'
					key={feature.sys.id}
					{...inspectorProps({
						entryId: feature?.sys?.id,
						fieldId: 'title',
					})}
				>
					{featureLink && featureIcon?.fields && (
						<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5'>
							<XDIcon
								entry={featureIcon}
								id={featureIcon.sys.id}
							/>
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
			<div className='container px-5 py-24 mx-auto flex flex-wrap'>
				<div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex items-center'>
					{image?.fields?.file?.details?.image && (
						<ContentfulImage
							alt={image.fields.description || 'Feature Image'}
							src={image.fields.file.url}
							width={image.fields.file.details.image.width}
							height={image.fields.file.details.image.height}
							{...inspectorProps({
								entryId: setId,
								fieldId: 'image',
							})}
						/>
					)}
				</div>
				<div
					className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'
					{...inspectorProps({
						entryId: setId,
						fieldId: 'features',
					})}
				>
					{features}
				</div>
			</div>
		</section>
	);
}
