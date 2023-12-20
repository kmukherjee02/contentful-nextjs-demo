import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeXdLinkFields {
    linkName?: EntryFieldTypes.Symbol;
    label?: EntryFieldTypes.Symbol;
    href?: EntryFieldTypes.Symbol;
    target?: EntryFieldTypes.Symbol<"_blank" | "_self">;
    isExternal?: EntryFieldTypes.Boolean;
    displayStyle?: EntryFieldTypes.Symbol<"Button" | "Link">;
    theme?: EntryFieldTypes.Symbol<"primary" | "secondary" | "tertiary">;
}

export type TypeXdLinkSkeleton = EntrySkeletonType<TypeXdLinkFields, "xdLink">;
export type TypeXdLink<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdLinkSkeleton, Modifiers, Locales>;

export function isTypeXdLink<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdLink<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdLink'
}
