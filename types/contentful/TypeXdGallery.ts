import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdGalleryItemSkeleton } from "./TypeXdGalleryItem";

export interface TypeXdGalleryFields {
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    galleryItems?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdGalleryItemSkeleton>>;
    galleryDisplay?: EntryFieldTypes.Symbol<"Display Type 1" | "Display Type 2" | "Display Type 3">;
}

export type TypeXdGallerySkeleton = EntrySkeletonType<TypeXdGalleryFields, "xdGallery">;
export type TypeXdGallery<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdGallerySkeleton, Modifiers, Locales>;
