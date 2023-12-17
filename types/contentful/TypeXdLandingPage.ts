import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSeoMetadataSkeleton } from "./TypeSeoMetadata";
import type { TypeXdBannerSkeleton } from "./TypeXdBanner";
import type { TypeXdHeaderSkeleton } from "./TypeXdHeader";
import type { TypeXdHeroImageSkeleton } from "./TypeXdHeroImage";
import type { TypeXdHubSpotWithImageSkeleton } from "./TypeXdHubSpotWithImage";
import type { TypeXdLogoCloudSkeleton } from "./TypeXdLogoCloud";
import type { TypeXdSectionWithImageSkeleton } from "./TypeXdSectionWithImage";
import type { TypeXdSetOfCardSkeleton } from "./TypeXdSetOfCard";
import type { TypeXdSetOfFeaturesSkeleton } from "./TypeXdSetOfFeatures";
import type { TypeXdSetOfPricingSkeleton } from "./TypeXdSetOfPricing";
import type { TypeXdSetOfTeamMembersSkeleton } from "./TypeXdSetOfTeamMembers";
import type { TypeXdSetOfTestimonialCardsSkeleton } from "./TypeXdSetOfTestimonialCards";

export interface TypeXdLandingPageFields {
    name?: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    seoMetaData?: EntryFieldTypes.EntryLink<TypeSeoMetadataSkeleton>;
    sections?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdBannerSkeleton | TypeXdHeaderSkeleton | TypeXdHeroImageSkeleton | TypeXdHubSpotWithImageSkeleton | TypeXdLogoCloudSkeleton | TypeXdSectionWithImageSkeleton | TypeXdSetOfCardSkeleton | TypeXdSetOfFeaturesSkeleton | TypeXdSetOfPricingSkeleton | TypeXdSetOfTeamMembersSkeleton | TypeXdSetOfTestimonialCardsSkeleton>>;
}

export type TypeXdLandingPageSkeleton = EntrySkeletonType<TypeXdLandingPageFields, "xdLandingPage">;
export type TypeXdLandingPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdLandingPageSkeleton, Modifiers, Locales>;
