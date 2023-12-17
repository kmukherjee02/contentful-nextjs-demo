import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNavigationMenuFields {
    name?: EntryFieldTypes.Symbol;
    navigationElements?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeNavigationMenuSkeleton = EntrySkeletonType<TypeNavigationMenuFields, "navigationMenu">;
export type TypeNavigationMenu<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavigationMenuSkeleton, Modifiers, Locales>;
