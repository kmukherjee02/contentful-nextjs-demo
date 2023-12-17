import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageWithCaptionSkeleton } from "./TypeImageWithCaption";

export interface TypeImageCarouselFields {
    name?: EntryFieldTypes.Symbol;
    images?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeImageWithCaptionSkeleton>>;
}

export type TypeImageCarouselSkeleton = EntrySkeletonType<TypeImageCarouselFields, "imageCarousel">;
export type TypeImageCarousel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeImageCarouselSkeleton, Modifiers, Locales>;

export function isTypeImageCarousel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeImageCarousel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'imageCarousel'
}
