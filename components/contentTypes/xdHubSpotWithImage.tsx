import Script from 'next/script';
import { ContentfulLivePreview } from '@contentful/live-preview';
import { HubSpotForm } from '@components/HubSpotForm';
import { hubSpotFormCreate } from '@lib/utilities/hubSpot';
import { getAbsoluteImageUrlInWebp } from '@lib/utilities/index';
import { XDHubSpotWithImageProps } from 'types';

const XDHubSpotWithImage = ({ entry }: XDHubSpotWithImageProps) => {
	const { fields, sys } = entry;

	const contentfulInspectorProps = { entryId: sys?.id };

	const formDetails = fields?.hubSpotDetail?.fields.formDetails;

	const background = getAbsoluteImageUrlInWebp(
		fields?.image?.fields?.file?.url
	);
	return (
		<div
			className={`bg-no-repeat bg-cover`}
			style={{ backgroundImage: `url(${background})` }}
			{...ContentfulLivePreview.getProps({
				...contentfulInspectorProps,
				fieldId: 'image',
			})}
		>
			<Script
				id='huspot-js'
				strategy='afterInteractive'
				type='text/javascript'
				src='//js.hsforms.net/forms/v2.js'
				onLoad={() => {
					hubSpotFormCreate(formDetails);
				}}
			/>
			<HubSpotForm
				formDetail={formDetails}
				height={
					fields?.image?.fields?.file?.details?.image?.height || 0
				}
			/>
		</div>
	);
};

export default XDHubSpotWithImage;
