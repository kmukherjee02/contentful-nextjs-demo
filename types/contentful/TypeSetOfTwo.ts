import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCallToActionSkeleton } from "./TypeCallToAction";
import type { TypeHeadlineSkeleton } from "./TypeHeadline";
import type { TypeImageCarouselSkeleton } from "./TypeImageCarousel";
import type { TypeImageWithCaptionSkeleton } from "./TypeImageWithCaption";
import type { TypeParagraphWithHeadlineSkeleton } from "./TypeParagraphWithHeadline";
import type { TypeTextWithImageSkeleton } from "./TypeTextWithImage";

export interface TypeSetOfTwoFields {
    name?: EntryFieldTypes.Symbol;
    items?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCallToActionSkeleton | TypeHeadlineSkeleton | TypeImageCarouselSkeleton | TypeImageWithCaptionSkeleton | TypeParagraphWithHeadlineSkeleton | TypeTextWithImageSkeleton>>;
}

export type TypeSetOfTwoSkeleton = EntrySkeletonType<TypeSetOfTwoFields, "setOfTwo">;
export type TypeSetOfTwo<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSetOfTwoSkeleton, Modifiers, Locales>;
