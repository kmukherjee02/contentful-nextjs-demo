import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeXdIconFields {
    name?: EntryFieldTypes.Symbol;
    iconName?: EntryFieldTypes.Symbol;
}

export type TypeXdIconSkeleton = EntrySkeletonType<TypeXdIconFields, "xdIcon">;
export type TypeXdIcon<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdIconSkeleton, Modifiers, Locales>;
