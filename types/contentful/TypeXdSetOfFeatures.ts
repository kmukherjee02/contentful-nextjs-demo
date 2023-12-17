import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdFeatureSkeleton } from "./TypeXdFeature";
import type { TypeXdLinkSkeleton } from "./TypeXdLink";

export interface TypeXdSetOfFeaturesFields {
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    features?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdFeatureSkeleton>>;
    image?: EntryFieldTypes.AssetLink;
    link?: EntryFieldTypes.EntryLink<TypeXdLinkSkeleton>;
    displayStyle?: EntryFieldTypes.Symbol<"Display Style 1" | "Display Style 2" | "Display Style 3">;
}

export type TypeXdSetOfFeaturesSkeleton = EntrySkeletonType<TypeXdSetOfFeaturesFields, "xdSetOfFeatures">;
export type TypeXdSetOfFeatures<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSetOfFeaturesSkeleton, Modifiers, Locales>;
