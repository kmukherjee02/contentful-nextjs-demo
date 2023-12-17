import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTextWithImageFields {
    name?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
    imagePosition?: EntryFieldTypes.Symbol<"Left" | "Right">;
}

export type TypeTextWithImageSkeleton = EntrySkeletonType<TypeTextWithImageFields, "textWithImage">;
export type TypeTextWithImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTextWithImageSkeleton, Modifiers, Locales>;
