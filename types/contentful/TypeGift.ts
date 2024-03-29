import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeGiftFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    sku?: EntryFieldTypes.Object;
}

export type TypeGiftSkeleton = EntrySkeletonType<TypeGiftFields, "gift">;
export type TypeGift<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeGiftSkeleton, Modifiers, Locales>;

export function isTypeGift<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeGift<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'gift'
}
