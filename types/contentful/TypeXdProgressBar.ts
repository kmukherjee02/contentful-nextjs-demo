import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeXdProgressBarFields {
    title?: EntryFieldTypes.Symbol;
    progressAmount?: EntryFieldTypes.Integer;
    progressUnit?: EntryFieldTypes.Symbol;
    theme?: EntryFieldTypes.Symbol<"primary" | "secondary" | "tertiary">;
}

export type TypeXdProgressBarSkeleton = EntrySkeletonType<TypeXdProgressBarFields, "xdProgressBar">;
export type TypeXdProgressBar<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdProgressBarSkeleton, Modifiers, Locales>;
