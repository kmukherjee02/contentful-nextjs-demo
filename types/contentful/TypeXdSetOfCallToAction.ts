import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdCallToActionSkeleton } from "./TypeXdCallToAction";

export interface TypeXdSetOfCallToActionFields {
    name?: EntryFieldTypes.Symbol;
    setOfCta?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdCallToActionSkeleton>>;
}

export type TypeXdSetOfCallToActionSkeleton = EntrySkeletonType<TypeXdSetOfCallToActionFields, "xdSetOfCallToAction">;
export type TypeXdSetOfCallToAction<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSetOfCallToActionSkeleton, Modifiers, Locales>;
