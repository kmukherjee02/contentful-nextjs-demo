import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePostFields {
    title?: EntryFieldTypes.Symbol;
    date?: EntryFieldTypes.Date;
    image?: EntryFieldTypes.AssetLink;
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, "post">;
export type TypePost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePostSkeleton, Modifiers, Locales>;
