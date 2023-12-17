import Script from 'next/script';
import { HubSpotForm } from '@components/HubSpotForm';
import { hubSpotFormCreate } from '@lib/utilities/hubSpot';
import { getAbsoluteImageUrlInWebp } from '@lib/utilities/index';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { XDHubSpotWithImageProps } from 'types';

const XDHubSpotWithImage = ({ entry }: XDHubSpotWithImageProps) => {
    const { fields, sys } = entry;

	const inspectorProps = useContentfulInspectorMode({ entryId: sys?.id });
    
    const formDetails = fields.hubSpotDetail.fields.formDetails

	const background = getAbsoluteImageUrlInWebp(fields.image.fields.file.url);
	return (
		<div
			className={`bg-no-repeat`}
			style={{ backgroundImage: `url(${background})` }}
			{...inspectorProps({ fieldId: 'image' })}>
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
				height={fields.image.fields.file.details.image.height}
			/>
		</div>
	);
};

export default XDHubSpotWithImage;
