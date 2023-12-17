import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCallToActionSkeleton } from "./TypeCallToAction";
import type { TypeHeaderSkeleton } from "./TypeHeader";
import type { TypeHeadlineSkeleton } from "./TypeHeadline";
import type { TypeHeroImageSkeleton } from "./TypeHeroImage";
import type { TypeImageCarouselSkeleton } from "./TypeImageCarousel";
import type { TypeImageWithCaptionSkeleton } from "./TypeImageWithCaption";
import type { TypeSeoMetadataSkeleton } from "./TypeSeoMetadata";
import type { TypeSetOfThreeSkeleton } from "./TypeSetOfThree";
import type { TypeSetOfTwoSkeleton } from "./TypeSetOfTwo";
import type { TypeTextWithImageSkeleton } from "./TypeTextWithImage";

export interface TypeLandingPageFields {
    title?: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    seoMetadata?: EntryFieldTypes.EntryLink<TypeSeoMetadataSkeleton>;
    sections?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCallToActionSkeleton | TypeHeaderSkeleton | TypeHeadlineSkeleton | TypeHeroImageSkeleton | TypeImageCarouselSkeleton | TypeImageWithCaptionSkeleton | TypeSetOfThreeSkeleton | TypeSetOfTwoSkeleton | TypeTextWithImageSkeleton>>;
}

export type TypeLandingPageSkeleton = EntrySkeletonType<TypeLandingPageFields, "landingPage">;
export type TypeLandingPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLandingPageSkeleton, Modifiers, Locales>;
