import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSeoMetadataFields {
    title?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.Text;
    keywords?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    author?: EntryFieldTypes.Symbol;
}

export type TypeSeoMetadataSkeleton = EntrySkeletonType<TypeSeoMetadataFields, "seoMetadata">;
export type TypeSeoMetadata<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSeoMetadataSkeleton, Modifiers, Locales>;
