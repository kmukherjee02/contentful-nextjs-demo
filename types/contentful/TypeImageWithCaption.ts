import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeImageWithCaptionFields {
    name?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    caption?: EntryFieldTypes.Symbol;
}

export type TypeImageWithCaptionSkeleton = EntrySkeletonType<TypeImageWithCaptionFields, "imageWithCaption">;
export type TypeImageWithCaption<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeImageWithCaptionSkeleton, Modifiers, Locales>;

export function isTypeImageWithCaption<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeImageWithCaption<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'imageWithCaption'
}
