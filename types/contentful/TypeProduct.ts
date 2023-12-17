import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCallToActionSkeleton } from "./TypeCallToAction";
import type { TypeFeaturedProductsSkeleton } from "./TypeFeaturedProducts";
import type { TypeHeaderSkeleton } from "./TypeHeader";
import type { TypeHeadlineSkeleton } from "./TypeHeadline";
import type { TypeHeroImageSkeleton } from "./TypeHeroImage";
import type { TypeImageCarouselSkeleton } from "./TypeImageCarousel";
import type { TypeImageWithCaptionSkeleton } from "./TypeImageWithCaption";
import type { TypeParagraphWithHeadlineSkeleton } from "./TypeParagraphWithHeadline";
import type { TypeRelatedItemsSkeleton } from "./TypeRelatedItems";
import type { TypeSeoMetadataSkeleton } from "./TypeSeoMetadata";
import type { TypeSetOfThreeSkeleton } from "./TypeSetOfThree";
import type { TypeSetOfTwoSkeleton } from "./TypeSetOfTwo";
import type { TypeTextWithImageSkeleton } from "./TypeTextWithImage";

export interface TypeProductFields {
    title?: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    seoMetadata?: EntryFieldTypes.EntryLink<TypeSeoMetadataSkeleton>;
    sections?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCallToActionSkeleton | TypeFeaturedProductsSkeleton | TypeHeaderSkeleton | TypeHeadlineSkeleton | TypeHeroImageSkeleton | TypeImageCarouselSkeleton | TypeImageWithCaptionSkeleton | TypeParagraphWithHeadlineSkeleton | TypeRelatedItemsSkeleton | TypeSetOfThreeSkeleton | TypeSetOfTwoSkeleton | TypeTextWithImageSkeleton>>;
}

export type TypeProductSkeleton = EntrySkeletonType<TypeProductFields, "product">;
export type TypeProduct<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProductSkeleton, Modifiers, Locales>;
