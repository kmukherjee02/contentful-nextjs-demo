import FeatureA from './features/FeatureA';
import FeatureB from './features/FeatureB';
import FeatureC from './features/FeatureC';

export default function xdSetOfFeatures({entry}){
    console.log(entry);
    const displayStyle = entry.displayStyle;
    switch (displayStyle) {
        case "Display Style 1":
            return ( <FeatureA entry={entry} /> );
        case "Display Style 2":
            return ( <FeatureB entry={entry} /> );
        case "Display Style 3":
            return ( <FeatureC entry={entry} /> );
        default :
            console.log("Display style not found: " + displayStyle);
            console.log("Loading default display style");
            return ( <FeatureA entry={entry} /> );
    }
}