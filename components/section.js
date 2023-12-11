import XDHeader from './contentTypes/xdHeader';
import XDHeroImage from './contentTypes/xdHeroImage';
import XDSetOfCard from './contentTypes/xdSetOfCard';
import XDSetOfFeatures from './contentTypes/xdSetOfFeatures';
import XDSectionWithImage from './contentTypes/xdSectionWithImage';
import XDBanner from './contentTypes/xdBanner';
import XDSetOfTestimonialCards  from './contentTypes/xdSetOfTestimonialCards';
import XDSetOfTeamMembers from './contentTypes/xdSetOfTeamMembers';
import XDHubSpotWithImage from './contentTypes/xdHubSpotWithImage'; 
import XDSetOfPricingCard from './contentTypes/xdSetOfPricingCard';
export default function Section ({sectionType, section, ArrayKey, sys}) {
 
    const renderSection = () => {
        switch (sectionType) {
          case 'xdHeader':
            return (<XDHeader entry={section.fields} sys={section.sys} /> )
          case 'xdHeroImage':
            return ( <XDHeroImage entry={section.fields} sys={section.sys}/> )
          case 'xdSetOfCard':
            return ( <XDSetOfCard entry={section.fields} sys={section.sys} /> )
          case 'xdSetOfFeatures':
              return ( <XDSetOfFeatures entry={section.fields} sys={section.sys} /> )
          case 'xdSectionWithImage':
            return ( <XDSectionWithImage entry={section.fields} sys={section.sys} /> )
          case 'xdBanner':
            return ( <XDBanner entry={section.fields} sys={section.sys} /> )
          case 'xdSetOfTestimonialCards':
            return ( <XDSetOfTestimonialCards entry={section.fields} sys={section.sys} /> )
          case 'xdSetOfTeamMembers':
            return ( <XDSetOfTeamMembers entry={section.fields} sys={section.sys} /> )
          case 'xdHubSpotWithImage':
            return ( <XDHubSpotWithImage entry={section.fields} sys={section.sys} /> )
          case 'xdSetOfPricing':
            return ( <XDSetOfPricingCard entry={section.fields} sys={section.sys}/> )
          default:
            console.log("Section type not found: " + sectionType);
            return ( <div data-content-type='not-found'>Illegal Section Type</div> )
        }
      }

    return (
      <div  className=''>
       {renderSection()}
      </div>
    )
}