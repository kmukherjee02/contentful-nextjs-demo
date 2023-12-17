import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdTestimonialCardSkeleton } from "./TypeXdTestimonialCard";

export interface TypeXdSetOfTestimonialCardsFields {
    title?: EntryFieldTypes.Symbol;
    caption?: EntryFieldTypes.Symbol;
    testimonialCards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdTestimonialCardSkeleton>>;
}

export type TypeXdSetOfTestimonialCardsSkeleton = EntrySkeletonType<TypeXdSetOfTestimonialCardsFields, "xdSetOfTestimonialCards">;
export type TypeXdSetOfTestimonialCards<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSetOfTestimonialCardsSkeleton, Modifiers, Locales>;
