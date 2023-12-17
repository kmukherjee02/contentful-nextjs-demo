import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdNavigationItemSkeleton } from "./TypeXdNavigationItem";

export interface TypeXdNavigationMenuFields {
    name?: EntryFieldTypes.Symbol;
    navigationItems?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdNavigationItemSkeleton>>;
}

export type TypeXdNavigationMenuSkeleton = EntrySkeletonType<TypeXdNavigationMenuFields, "xdNavigationMenu">;
export type TypeXdNavigationMenu<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdNavigationMenuSkeleton, Modifiers, Locales>;
