import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdCardSkeleton } from "./TypeXdCard";

export interface TypeXdSetOfCardFields {
    title?: EntryFieldTypes.Symbol;
    caption?: EntryFieldTypes.Symbol;
    cards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdCardSkeleton>>;
}

export type TypeXdSetOfCardSkeleton = EntrySkeletonType<TypeXdSetOfCardFields, "xdSetOfCard">;
export type TypeXdSetOfCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSetOfCardSkeleton, Modifiers, Locales>;

export function isTypeXdSetOfCard<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdSetOfCard<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdSetOfCard'
}
