import { ReactNode } from 'react';
import { ImageProps } from 'next/image';
import * as Contentful from './contentful';

type Children = ReactNode;
type DraftMode = boolean;

type DraftModeObj = { draftMode: DraftMode };
type ChildrenObj = { children: Children };

type LandingPage = Contentful.TypeXdLandingPage<
	'WITHOUT_UNRESOLVABLE_LINKS',
	'en-US'
>;

/** pages */
export type IndexPageProps = { page: LandingPage } & DraftModeObj;
export type SlugPageProps = IndexPageProps;

/** components */
export type ButtonAnimatedProps = XDLinkProps | XDCallToActionProps;
export type ContainerProps = ChildrenObj;
export type ContentfulImageProps = ImageProps;
export type DateProps = {
	dateString: string;
};
export type HubSpotFormProps = {
	formDetail: unknown;
	height: number;
};
export type LayoutProps = DraftModeObj & ChildrenObj;

export type LandingPageProps = { entry: LandingPage } & DraftModeObj;
export type SectionsProps = { sections: LandingPage['fields']['sections'] };
export type SectionProps = {
	sectionType: string;
	section: unknown;
	arrayKey: number;
};

/** content types */
export type XDBannerProps = {
    entry: Contentful.TypeXdBanner<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
}
export type XDCallToActionProps = {
	entry: Contentful.TypeXdCallToAction<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
};
export type XDCardProps = {
    entry: Contentful.TypeXdCard<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
}
export type XDCounterProps = {
    entry: Contentful.TypeXdCounter<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
}
export type XDHeaderProps = {
    entry: Contentful.TypeXdHeader<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
};
export type XDHeroImageProps = {
    entry: Contentful.TypeXdHeroImage<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
};
export type XDHubSpotWithImageProps = {
    entry: Contentful.TypeXdHubSpotWithImage<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
}
export type XDIconProps = {
    entry: Contentful.TypeXdIcon<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
    className?: string;
    id: string;
}
export type XDImageWthTextProps = {
    entry: Contentful.TypeXdImageWithText<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
}
export type XDLinkProps = {
    entry: Contentful.TypeXdLink<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
    className?: string;
}
export type XDNavigationMenuProps = {
    entry: Contentful.TypeXdNavigationMenu<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
	fixedHeader: boolean;
	isMobile?: boolean;
	isMobileNavOpen?: boolean;
}
export type XDNavItemProps = {
    entry: Contentful.TypeXdNavigationItem<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
    fixedHeader?: boolean;
    isChildNavItem?:  boolean;
}
export type XDPricingCardProps = {
    entry: Contentful.TypeXdPricing<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
    pricingPeriod: string;
};
export type XDProgressBarProps = {
    entry: Contentful.TypeXdProgressBar<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
};
export type XDSectionWithImageProps = {
    entry: Contentful.TypeXdSectionWithImage<
        'WITHOUT_UNRESOLVABLE_LINKS',
        'en-US'
    >;
};
export type XDSetOfProgressBarProps = {
    entry: Contentful.TypeXdSetOfProgressBar<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
};
export type XDSetOfCallToActionProps = {
    entry: Contentful.TypeXdSetOfCallToAction<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
};
export type XDSetOfCardProps = {
	entry: Contentful.TypeXdSetOfCard<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
};
export type XDSetOfFeaturesProps = {
	entry: Contentful.TypeXdSetOfFeatures<
		'WITHOUT_UNRESOLVABLE_LINKS',
		'en-US'
	>;
};
export type XDSetOfPricingCardProps = {
    entry: Contentful.TypeXdSetOfPricing<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
};
export type XDSetOfTeamMembersProps = {
    entry: Contentful.TypeXdSetOfTeamMembers<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
};
export type XDSetOfTestimonialCardsProps = {
    entry: Contentful.TypeXdSetOfTestimonialCards<
        'WITHOUT_UNRESOLVABLE_LINKS',
        'en-US'
    >;
};
export type XDTeamMemberProps = {
    entry: Contentful.TypeXdPerson<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
}
export type XDTestimonialCardProps = {
    entry: Contentful.TypeXdTestimonialCard<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
}