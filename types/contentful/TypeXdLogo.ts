import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeXdLogoFields {
    entryTitle?: EntryFieldTypes.Symbol;
    logo?: EntryFieldTypes.AssetLink;
    alt?: EntryFieldTypes.Symbol;
    link?: EntryFieldTypes.Symbol;
}

export type TypeXdLogoSkeleton = EntrySkeletonType<TypeXdLogoFields, "xdLogo">;
export type TypeXdLogo<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdLogoSkeleton, Modifiers, Locales>;
