import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeImageWithFocalPointFields {
    title: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    focalPoint: EntryFieldTypes.Object;
    altText?: EntryFieldTypes.Symbol;
    caption?: EntryFieldTypes.Symbol;
}

export type TypeImageWithFocalPointSkeleton = EntrySkeletonType<TypeImageWithFocalPointFields, "imageWithFocalPoint">;
export type TypeImageWithFocalPoint<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeImageWithFocalPointSkeleton, Modifiers, Locales>;
