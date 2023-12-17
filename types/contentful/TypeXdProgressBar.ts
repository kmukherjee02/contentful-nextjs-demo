import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeXdProgressBarFields {
    title?: EntryFieldTypes.Symbol;
    progressAmount?: EntryFieldTypes.Integer;
    progressUnit?: EntryFieldTypes.Symbol;
    theme?: EntryFieldTypes.Symbol<"primary" | "secondary" | "tertiary">;
}

export type TypeXdProgressBarSkeleton = EntrySkeletonType<TypeXdProgressBarFields, "xdProgressBar">;
export type TypeXdProgressBar<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdProgressBarSkeleton, Modifiers, Locales>;

export function isTypeXdProgressBar<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdProgressBar<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdProgressBar'
}
