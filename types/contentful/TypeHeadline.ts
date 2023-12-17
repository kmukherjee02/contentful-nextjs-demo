import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeadlineFields {
    name?: EntryFieldTypes.Symbol;
    headline?: EntryFieldTypes.Symbol;
    subHeadline?: EntryFieldTypes.Symbol;
}

export type TypeHeadlineSkeleton = EntrySkeletonType<TypeHeadlineFields, "headline">;
export type TypeHeadline<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeadlineSkeleton, Modifiers, Locales>;
