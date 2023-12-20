import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCallToActionFields {
    name?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.Text;
    buttonText?: EntryFieldTypes.Symbol;
}

export type TypeCallToActionSkeleton = EntrySkeletonType<TypeCallToActionFields, "callToAction">;
export type TypeCallToAction<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCallToActionSkeleton, Modifiers, Locales>;

export function isTypeCallToAction<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCallToAction<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'callToAction'
}
