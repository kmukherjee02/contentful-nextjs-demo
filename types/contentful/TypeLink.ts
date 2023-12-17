import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLinkFields {
    name?: EntryFieldTypes.Symbol;
    displayText?: EntryFieldTypes.Symbol;
    url?: EntryFieldTypes.Text;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;
