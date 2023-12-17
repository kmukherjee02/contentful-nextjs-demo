import FeatureA from '@components/contentTypes/features/FeatureA';
import FeatureB from '@components/contentTypes/features/FeatureB';
import FeatureC from '@components/contentTypes/features/FeatureC';
import { XDSetOfFeaturesProps } from 'types';


export default function XDSetOfFeatures({ entry }: XDSetOfFeaturesProps) {
    const { fields } = entry;


    const displayStyle = fields.displayStyle;
    
    switch (displayStyle) {
        case "Display Style 1":
            return ( <FeatureA entry={entry} /> );
        case "Display Style 2":
            return ( <FeatureB entry={entry} /> );
        case "Display Style 3":
            return ( <FeatureC entry={entry} /> );
        default :
           // console.log("Display style not found: " + displayStyle);
            //console.log("Loading default display style");
            return ( <FeatureA entry={entry} /> );
    }
}