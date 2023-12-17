import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeHeaderFields {
    name?: EntryFieldTypes.Symbol;
    logo?: EntryFieldTypes.AssetLink;
    navigationLinks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, "header">;
export type TypeHeader<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeaderSkeleton, Modifiers, Locales>;
