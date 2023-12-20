import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdCallToActionSkeleton } from "./TypeXdCallToAction";
import type { TypeXdCounterSkeleton } from "./TypeXdCounter";

export interface TypeXdBannerFields {
    name?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
    counter?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdCounterSkeleton>>;
    cta?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdCallToActionSkeleton>>;
}

export type TypeXdBannerSkeleton = EntrySkeletonType<TypeXdBannerFields, "xdBanner">;
export type TypeXdBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdBannerSkeleton, Modifiers, Locales>;

export function isTypeXdBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdBanner<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdBanner'
}
