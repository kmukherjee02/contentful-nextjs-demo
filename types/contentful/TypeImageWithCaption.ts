import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeImageWithCaptionFields {
    name?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    caption?: EntryFieldTypes.Symbol;
}

export type TypeImageWithCaptionSkeleton = EntrySkeletonType<TypeImageWithCaptionFields, "imageWithCaption">;
export type TypeImageWithCaption<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeImageWithCaptionSkeleton, Modifiers, Locales>;
