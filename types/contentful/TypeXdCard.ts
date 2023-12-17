import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdIconSkeleton } from "./TypeXdIcon";
import type { TypeXdLinkSkeleton } from "./TypeXdLink";

export interface TypeXdCardFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    link?: EntryFieldTypes.EntryLink<TypeXdLinkSkeleton>;
    icon?: EntryFieldTypes.EntryLink<TypeXdIconSkeleton>;
    alignment?: EntryFieldTypes.Symbol<"center" | "left" | "right">;
}

export type TypeXdCardSkeleton = EntrySkeletonType<TypeXdCardFields, "xdCard">;
export type TypeXdCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdCardSkeleton, Modifiers, Locales>;
