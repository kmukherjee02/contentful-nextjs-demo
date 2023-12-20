import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdProgressBarSkeleton } from "./TypeXdProgressBar";

export interface TypeXdSetOfProgressBarFields {
    name?: EntryFieldTypes.Symbol;
    progressBars?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdProgressBarSkeleton>>;
}

export type TypeXdSetOfProgressBarSkeleton = EntrySkeletonType<TypeXdSetOfProgressBarFields, "xdSetOfProgressBar">;
export type TypeXdSetOfProgressBar<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSetOfProgressBarSkeleton, Modifiers, Locales>;

export function isTypeXdSetOfProgressBar<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdSetOfProgressBar<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdSetOfProgressBar'
}
