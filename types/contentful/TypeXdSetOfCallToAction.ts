import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdCallToActionSkeleton } from "./TypeXdCallToAction";

export interface TypeXdSetOfCallToActionFields {
    name?: EntryFieldTypes.Symbol;
    setOfCta?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdCallToActionSkeleton>>;
}

export type TypeXdSetOfCallToActionSkeleton = EntrySkeletonType<TypeXdSetOfCallToActionFields, "xdSetOfCallToAction">;
export type TypeXdSetOfCallToAction<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSetOfCallToActionSkeleton, Modifiers, Locales>;

export function isTypeXdSetOfCallToAction<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdSetOfCallToAction<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdSetOfCallToAction'
}
