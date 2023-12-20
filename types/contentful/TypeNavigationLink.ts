import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNavigationLinkFields {
    title?: EntryFieldTypes.Symbol;
    linkedPage?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    parent?: EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>;
    target?: EntryFieldTypes.Symbol<"_blank">;
    url?: EntryFieldTypes.Symbol;
    isExternalLink?: EntryFieldTypes.Boolean;
}

export type TypeNavigationLinkSkeleton = EntrySkeletonType<TypeNavigationLinkFields, "navigationLink">;
export type TypeNavigationLink<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavigationLinkSkeleton, Modifiers, Locales>;

export function isTypeNavigationLink<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNavigationLink<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'navigationLink'
}
