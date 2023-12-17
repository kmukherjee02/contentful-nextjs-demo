import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTextWithImageFields {
    name?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
    imagePosition?: EntryFieldTypes.Symbol<"Left" | "Right">;
}

export type TypeTextWithImageSkeleton = EntrySkeletonType<TypeTextWithImageFields, "textWithImage">;
export type TypeTextWithImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTextWithImageSkeleton, Modifiers, Locales>;

export function isTypeTextWithImage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeTextWithImage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'textWithImage'
}
