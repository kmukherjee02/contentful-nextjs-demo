import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNavigationMenuFields {
    name?: EntryFieldTypes.Symbol;
    navigationElements?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeNavigationMenuSkeleton = EntrySkeletonType<TypeNavigationMenuFields, "navigationMenu">;
export type TypeNavigationMenu<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavigationMenuSkeleton, Modifiers, Locales>;

export function isTypeNavigationMenu<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNavigationMenu<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'navigationMenu'
}
