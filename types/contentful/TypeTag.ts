import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTagFields {
    name: EntryFieldTypes.Symbol;
}

export type TypeTagSkeleton = EntrySkeletonType<TypeTagFields, "tag">;
export type TypeTag<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTagSkeleton, Modifiers, Locales>;

export function isTypeTag<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeTag<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'tag'
}
