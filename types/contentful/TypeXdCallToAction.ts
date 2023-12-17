import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdLinkSkeleton } from "./TypeXdLink";

export interface TypeXdCallToActionFields {
    name?: EntryFieldTypes.Symbol;
    buttonText?: EntryFieldTypes.Symbol;
    link?: EntryFieldTypes.EntryLink<TypeXdLinkSkeleton>;
    theme?: EntryFieldTypes.Symbol<"primary" | "secondary" | "tertiary">;
}

export type TypeXdCallToActionSkeleton = EntrySkeletonType<TypeXdCallToActionFields, "xdCallToAction">;
export type TypeXdCallToAction<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdCallToActionSkeleton, Modifiers, Locales>;

export function isTypeXdCallToAction<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdCallToAction<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdCallToAction'
}
