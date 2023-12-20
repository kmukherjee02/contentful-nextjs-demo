import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeroImageFields {
    name?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeHeroImageSkeleton = EntrySkeletonType<TypeHeroImageFields, "heroImage">;
export type TypeHeroImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeroImageSkeleton, Modifiers, Locales>;

export function isTypeHeroImage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHeroImage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'heroImage'
}
