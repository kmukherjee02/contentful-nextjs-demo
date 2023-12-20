import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeadlineFields {
    name?: EntryFieldTypes.Symbol;
    headline?: EntryFieldTypes.Symbol;
    subHeadline?: EntryFieldTypes.Symbol;
}

export type TypeHeadlineSkeleton = EntrySkeletonType<TypeHeadlineFields, "headline">;
export type TypeHeadline<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeadlineSkeleton, Modifiers, Locales>;

export function isTypeHeadline<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHeadline<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'headline'
}
