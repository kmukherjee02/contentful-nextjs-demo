import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeroImageFields {
    name?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeHeroImageSkeleton = EntrySkeletonType<TypeHeroImageFields, "heroImage">;
export type TypeHeroImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeroImageSkeleton, Modifiers, Locales>;
