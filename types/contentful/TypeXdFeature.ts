import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdIconSkeleton } from "./TypeXdIcon";
import type { TypeXdLinkSkeleton } from "./TypeXdLink";

export interface TypeXdFeatureFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    icon: EntryFieldTypes.EntryLink<TypeXdIconSkeleton>;
    link?: EntryFieldTypes.EntryLink<TypeXdLinkSkeleton>;
}

export type TypeXdFeatureSkeleton = EntrySkeletonType<TypeXdFeatureFields, "xdFeature">;
export type TypeXdFeature<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdFeatureSkeleton, Modifiers, Locales>;
