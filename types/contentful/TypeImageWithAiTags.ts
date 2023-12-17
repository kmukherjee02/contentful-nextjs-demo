import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeImageWithAiTagsFields {
    title: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    imageTags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeImageWithAiTagsSkeleton = EntrySkeletonType<TypeImageWithAiTagsFields, "imageWithAiTags">;
export type TypeImageWithAiTags<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeImageWithAiTagsSkeleton, Modifiers, Locales>;
