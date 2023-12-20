import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeVideoWrapperFields {
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    video?: EntryFieldTypes.AssetLink;
}

export type TypeVideoWrapperSkeleton = EntrySkeletonType<TypeVideoWrapperFields, "videoWrapper">;
export type TypeVideoWrapper<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeVideoWrapperSkeleton, Modifiers, Locales>;

export function isTypeVideoWrapper<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeVideoWrapper<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'videoWrapper'
}
