import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeXdPersonFields {
    name?: EntryFieldTypes.Symbol;
    designation?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    facebookProfileLink?: EntryFieldTypes.Symbol;
    twitterProfileLink?: EntryFieldTypes.Symbol;
    linkedInProfileLink?: EntryFieldTypes.Symbol;
    biography?: EntryFieldTypes.Symbol;
}

export type TypeXdPersonSkeleton = EntrySkeletonType<TypeXdPersonFields, "xdPerson">;
export type TypeXdPerson<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdPersonSkeleton, Modifiers, Locales>;

export function isTypeXdPerson<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdPerson<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdPerson'
}
