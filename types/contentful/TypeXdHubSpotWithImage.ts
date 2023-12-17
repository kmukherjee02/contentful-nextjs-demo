import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHubSpotFormSkeleton } from "./TypeHubSpotForm";

export interface TypeXdHubSpotWithImageFields {
    title: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    hubSpotDetail?: EntryFieldTypes.EntryLink<TypeHubSpotFormSkeleton>;
}

export type TypeXdHubSpotWithImageSkeleton = EntrySkeletonType<TypeXdHubSpotWithImageFields, "xdHubSpotWithImage">;
export type TypeXdHubSpotWithImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdHubSpotWithImageSkeleton, Modifiers, Locales>;
