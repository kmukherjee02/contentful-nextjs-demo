import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeXdCounterFields {
    name?: EntryFieldTypes.Symbol;
    quantity?: EntryFieldTypes.Integer;
    suffix?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
}

export type TypeXdCounterSkeleton = EntrySkeletonType<TypeXdCounterFields, "xdCounter">;
export type TypeXdCounter<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdCounterSkeleton, Modifiers, Locales>;
