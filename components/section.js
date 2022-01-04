import XDHeader from './contentTypes/xdHeader';
import XDHeroImage from './contentTypes/xdHeroImage';
import XDSetOfCard from './contentTypes/xdSetOfCard';
import XDSectionWithImage from './contentTypes/xdSectionWithImage';
import XDBanner from './contentTypes/xdBanner';
import XDSetOfTestimonialCards  from './contentTypes/xdSetOfTestimonialCards';
import XDSetOfTeamMembers from './contentTypes/xdSetOfTeamMembers';

export default function Section ({sectionType, section, ArrayKey, sys}) {
    //console.log(section);
    const renderSection = () => {
        switch (sectionType) {
          case 'xdHeader':
            return (<XDHeader entry={section.fields} /> )
          case 'xdHeroImage':
            return ( <XDHeroImage entry={section.fields} /> )
          case 'xdSetOfCard':
            return ( <XDSetOfCard entry={section.fields} /> )
          case 'xdSectionWithImage':
            return ( <XDSectionWithImage entry={section.fields} /> )
          case 'xdBanner':
            return ( <XDBanner entry={section.fields} /> )
          case 'xdSetOfTestimonialCards':
            return ( <XDSetOfTestimonialCards entry={section.fields} /> )
          case 'xdSetOfTeamMembers':
            return ( <XDSetOfTeamMembers entry={section.entry} /> )
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