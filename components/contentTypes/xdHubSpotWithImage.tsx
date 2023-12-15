import Script from 'next/script'
import { HubSpotForm } from '../HubSpotForm'
import {hubSpotFormCreate} from '@lib/utilities/hubSpot'
import {getAbsoluteImageUrlInWebp} from '@lib/utilities/index';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

interface IXDHubSpotImageProps {
	entry: Record<string, any>;
    sys: Record<string, unknown>;
}

const XDHubSpotWithImage = ({entry, sys}: IXDHubSpotImageProps) => {
    const inspectorProps = useContentfulInspectorMode({entryId: sys?.id});
  
    const background = getAbsoluteImageUrlInWebp(entry.image.fields.file.url);  
    return (
        <div className= {`bg-no-repeat`} style={{ backgroundImage: `url(${background})` }} {...inspectorProps({ fieldId: 'image' })}>
            <Script id="huspot-js" strategy="afterInteractive" type="text/javascript" src="//js.hsforms.net/forms/v2.js" 
                onLoad={() => {
                    hubSpotFormCreate(entry.hubSpotDetail.fields.formDetails)
                }}
            />
            <HubSpotForm formDetail={entry.hubSpotDetail.fields.formDetails} height={entry.image.fields.file.details.image.height}/>
        </div>
       
    )
}

export default XDHubSpotWithImage;