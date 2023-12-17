import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdCallToActionSkeleton } from "./TypeXdCallToAction";
import type { TypeXdLinkSkeleton } from "./TypeXdLink";
import type { TypeXdNavigationMenuSkeleton } from "./TypeXdNavigationMenu";

export interface TypeXdHeaderFields {
    name?: EntryFieldTypes.Symbol;
    logo?: EntryFieldTypes.AssetLink;
    logoAlt?: EntryFieldTypes.AssetLink;
    logoHyperlink?: EntryFieldTypes.Symbol;
    navigation?: EntryFieldTypes.EntryLink<TypeXdNavigationMenuSkeleton>;
    callToAction?: EntryFieldTypes.EntryLink<TypeXdCallToActionSkeleton | TypeXdLinkSkeleton>;
}

export type TypeXdHeaderSkeleton = EntrySkeletonType<TypeXdHeaderFields, "xdHeader">;
export type TypeXdHeader<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdHeaderSkeleton, Modifiers, Locales>;

export function isTypeXdHeader<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdHeader<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdHeader'
}
