import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdLinkSkeleton } from "./TypeXdLink";
import type { TypeXdLogoSkeleton } from "./TypeXdLogo";

export interface TypeXdLogoCloudFields {
    entryTitle?: EntryFieldTypes.Symbol;
    heading?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    logos?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdLogoSkeleton>>;
    actions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdLinkSkeleton>>;
    displayStyle?: EntryFieldTypes.Symbol<"Grid" | "Simple with heading on brand" | "Simple with heading" | "Simple" | "Split grid">;
    backgroundColor?: EntryFieldTypes.Object;
}

export type TypeXdLogoCloudSkeleton = EntrySkeletonType<TypeXdLogoCloudFields, "xdLogoCloud">;
export type TypeXdLogoCloud<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdLogoCloudSkeleton, Modifiers, Locales>;
