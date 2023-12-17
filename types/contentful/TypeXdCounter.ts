import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeXdCounterFields {
    name?: EntryFieldTypes.Symbol;
    quantity?: EntryFieldTypes.Integer;
    suffix?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
}

export type TypeXdCounterSkeleton = EntrySkeletonType<TypeXdCounterFields, "xdCounter">;
export type TypeXdCounter<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdCounterSkeleton, Modifiers, Locales>;

export function isTypeXdCounter<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdCounter<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdCounter'
}
