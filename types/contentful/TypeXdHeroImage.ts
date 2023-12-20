import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdLinkSkeleton } from "./TypeXdLink";

export interface TypeXdHeroImageFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
    backgroundImage?: EntryFieldTypes.AssetLink;
    buttons?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdLinkSkeleton>>;
}

export type TypeXdHeroImageSkeleton = EntrySkeletonType<TypeXdHeroImageFields, "xdHeroImage">;
export type TypeXdHeroImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdHeroImageSkeleton, Modifiers, Locales>;

export function isTypeXdHeroImage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdHeroImage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdHeroImage'
}
