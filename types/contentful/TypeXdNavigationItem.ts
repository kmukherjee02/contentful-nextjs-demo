import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeXdNavigationItemFields {
    label?: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    children?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdNavigationItemSkeleton>>;
}

export type TypeXdNavigationItemSkeleton = EntrySkeletonType<TypeXdNavigationItemFields, "xdNavigationItem">;
export type TypeXdNavigationItem<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdNavigationItemSkeleton, Modifiers, Locales>;
