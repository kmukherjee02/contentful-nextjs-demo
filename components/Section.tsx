import XDHeader from '@components/contentTypes/xdHeader';
import XDHeroImage from '@components/contentTypes/xdHeroImage';
import XDSetOfCard from '@components/contentTypes/xdSetOfCard';
import XDSetOfFeatures from '@components/contentTypes/xdSetOfFeatures';
import XDSectionWithImage from '@components/contentTypes/xdSectionWithImage';
import XDBanner from '@components/contentTypes/xdBanner';
import XDSetOfTestimonialCards from '@components/contentTypes/xdSetOfTestimonialCards';
import XDSetOfTeamMembers from '@components/contentTypes/xdSetOfTeamMembers';
import XDHubSpotWithImage from '@components/contentTypes/xdHubSpotWithImage';
import XDSetOfPricingCard from '@components/contentTypes/xdSetOfPricingCard';
import {
	SectionProps,
	XDBannerProps,
	XDHeaderProps,
	XDHeroImageProps,
	XDHubSpotWithImageProps,
	XDSectionWithImageProps,
	XDSetOfCardProps,
	XDSetOfFeaturesProps,
	XDSetOfPricingCardProps,
	XDSetOfTeamMembersProps,
	XDSetOfTestimonialCardsProps,
} from 'types';

export default function Section({ sectionType, section }: SectionProps) {
	const renderSection = () => {
		switch (sectionType) {
			case 'xdHeader':
				return <XDHeader entry={section as XDHeaderProps['entry']} />;
			case 'xdHeroImage':
				return (
					<XDHeroImage entry={section as XDHeroImageProps['entry']} />
				);
			case 'xdSetOfCard':
				return (
					<XDSetOfCard entry={section as XDSetOfCardProps['entry']} />
				);
			case 'xdSetOfFeatures':
				return (
					<XDSetOfFeatures
						entry={section as XDSetOfFeaturesProps['entry']}
					/>
				);
			case 'xdSectionWithImage':
				return (
					<XDSectionWithImage
						entry={section as XDSectionWithImageProps['entry']}
					/>
				);
			case 'xdBanner':
				return <XDBanner entry={section as XDBannerProps['entry']} />;
			case 'xdSetOfTestimonialCards':
				return (
					<XDSetOfTestimonialCards
						entry={section as XDSetOfTestimonialCardsProps['entry']}
					/>
				);
			case 'xdSetOfTeamMembers':
				return (
					<XDSetOfTeamMembers
						entry={section as XDSetOfTeamMembersProps['entry']}
					/>
				);
			case 'xdHubSpotWithImage':
				return (
					<XDHubSpotWithImage
						entry={section as XDHubSpotWithImageProps['entry']}
					/>
				);
			case 'xdSetOfPricing':
				return (
					<XDSetOfPricingCard
						entry={section as XDSetOfPricingCardProps['entry']}
					/>
				);
			default:
				console.log('Section type not found: ' + sectionType);
				return (
					<div data-content-type='not-found'>
						Illegal Section Type
					</div>
				);
		}
	};

	return <div className=''>{renderSection()}</div>;
}
