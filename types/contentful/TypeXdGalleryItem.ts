import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdLinkSkeleton } from "./TypeXdLink";

export interface TypeXdGalleryItemFields {
    name: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    link?: EntryFieldTypes.EntryLink<TypeXdLinkSkeleton>;
}

export type TypeXdGalleryItemSkeleton = EntrySkeletonType<TypeXdGalleryItemFields, "xdGalleryItem">;
export type TypeXdGalleryItem<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdGalleryItemSkeleton, Modifiers, Locales>;

export function isTypeXdGalleryItem<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdGalleryItem<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdGalleryItem'
}
