import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHubSpotFormFields {
    title: EntryFieldTypes.Symbol;
    formDetails: EntryFieldTypes.Object;
}

export type TypeHubSpotFormSkeleton = EntrySkeletonType<TypeHubSpotFormFields, "hubSpotForm">;
export type TypeHubSpotForm<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHubSpotFormSkeleton, Modifiers, Locales>;

export function isTypeHubSpotForm<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHubSpotForm<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'hubSpotForm'
}
