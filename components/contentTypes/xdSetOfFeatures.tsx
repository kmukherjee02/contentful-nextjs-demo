import FeatureA from './features/FeatureA';
import FeatureB from './features/FeatureB';
import FeatureC from './features/FeatureC';

type XdSetOfFeaturesProps = {
    entry: Record<string, unknown>;
    sys: Record<string, unknown>;
}

export default function XdSetOfFeatures({entry, sys}: XdSetOfFeaturesProps) {
    const displayStyle = entry.displayStyle;
    
    switch (displayStyle) {
        case "Display Style 1":
            return ( <FeatureA entry={entry} sys={sys}/> );
        case "Display Style 2":
            return ( <FeatureB entry={entry} sys={sys}/> );
        case "Display Style 3":
            return ( <FeatureC entry={entry} sys={sys}/> );
        default :
           // console.log("Display style not found: " + displayStyle);
            //console.log("Loading default display style");
            return ( <FeatureA entry={entry} sys={sys}/> );
    }
}