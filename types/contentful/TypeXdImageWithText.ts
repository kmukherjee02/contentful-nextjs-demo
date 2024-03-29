import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeXdImageWithTextFields {
    name?: EntryFieldTypes.Symbol;
    imageText?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    imageTextPosition?: EntryFieldTypes.Symbol<"bottom" | "top">;
    imageTextAlignment?: EntryFieldTypes.Symbol<"center" | "left" | "right">;
}

export type TypeXdImageWithTextSkeleton = EntrySkeletonType<TypeXdImageWithTextFields, "xdImageWithText">;
export type TypeXdImageWithText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdImageWithTextSkeleton, Modifiers, Locales>;

export function isTypeXdImageWithText<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdImageWithText<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdImageWithText'
}
