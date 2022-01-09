import Script from 'next/script'
import { HubSpotForm } from '../hubSpotForm'
import {hubSpotFormCreate} from '@lib/utilities/hubSpot'
import {getAbsoluteImageUrlInWebp} from '@lib/utilities/index';

interface IXDHubSpotImageProps {
	entry: Record<string, any>;
}

const XDHubSpotWithImage = ({entry}: IXDHubSpotImageProps) => {
    const background = getAbsoluteImageUrlInWebp(entry.image.fields.file.url);  
    return (
        <div className= {`bg-no-repeat`} style={{ backgroundImage: `url(${background})` }}>
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