import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCallToActionSkeleton } from "./TypeCallToAction";
import type { TypeHeadlineSkeleton } from "./TypeHeadline";
import type { TypeImageCarouselSkeleton } from "./TypeImageCarousel";
import type { TypeImageWithCaptionSkeleton } from "./TypeImageWithCaption";
import type { TypeParagraphWithHeadlineSkeleton } from "./TypeParagraphWithHeadline";
import type { TypeTextWithImageSkeleton } from "./TypeTextWithImage";

export interface TypeSetOfThreeFields {
    name?: EntryFieldTypes.Symbol;
    items?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCallToActionSkeleton | TypeHeadlineSkeleton | TypeImageCarouselSkeleton | TypeImageWithCaptionSkeleton | TypeParagraphWithHeadlineSkeleton | TypeTextWithImageSkeleton>>;
}

export type TypeSetOfThreeSkeleton = EntrySkeletonType<TypeSetOfThreeFields, "setOfThree">;
export type TypeSetOfThree<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSetOfThreeSkeleton, Modifiers, Locales>;

export function isTypeSetOfThree<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSetOfThree<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'setOfThree'
}
