import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdImageWithTextSkeleton } from "./TypeXdImageWithText";
import type { TypeXdLinkSkeleton } from "./TypeXdLink";
import type { TypeXdSetOfCallToActionSkeleton } from "./TypeXdSetOfCallToAction";
import type { TypeXdSetOfProgressBarSkeleton } from "./TypeXdSetOfProgressBar";

export interface TypeXdSectionWithImageFields {
    title?: EntryFieldTypes.Symbol;
    caption?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    imageWithText?: EntryFieldTypes.EntryLink<TypeXdImageWithTextSkeleton>;
    imageWithTextAlignment?: EntryFieldTypes.Symbol<"left" | "right">;
    detail?: EntryFieldTypes.EntryLink<TypeXdSetOfCallToActionSkeleton | TypeXdSetOfProgressBarSkeleton>;
    button?: EntryFieldTypes.EntryLink<TypeXdLinkSkeleton>;
    theme?: EntryFieldTypes.Symbol<"primary" | "secondary" | "tertiary">;
}

export type TypeXdSectionWithImageSkeleton = EntrySkeletonType<TypeXdSectionWithImageFields, "xdSectionWithImage">;
export type TypeXdSectionWithImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSectionWithImageSkeleton, Modifiers, Locales>;
