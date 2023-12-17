import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeImageWithAiTagsFields {
    title: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    imageTags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeImageWithAiTagsSkeleton = EntrySkeletonType<TypeImageWithAiTagsFields, "imageWithAiTags">;
export type TypeImageWithAiTags<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeImageWithAiTagsSkeleton, Modifiers, Locales>;

export function isTypeImageWithAiTags<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeImageWithAiTags<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'imageWithAiTags'
}
