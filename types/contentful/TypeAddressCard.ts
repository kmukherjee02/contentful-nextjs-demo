import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAddressCardFields {
    title: EntryFieldTypes.Symbol;
    companyName?: EntryFieldTypes.Symbol;
    streetAddress?: EntryFieldTypes.Symbol;
    suiteOrApt?: EntryFieldTypes.Symbol;
    zipToCityStateApp: EntryFieldTypes.Object;
    colorPicker?: EntryFieldTypes.Object;
}

export type TypeAddressCardSkeleton = EntrySkeletonType<TypeAddressCardFields, "addressCard">;
export type TypeAddressCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAddressCardSkeleton, Modifiers, Locales>;
