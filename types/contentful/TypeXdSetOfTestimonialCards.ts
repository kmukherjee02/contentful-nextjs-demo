import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdTestimonialCardSkeleton } from "./TypeXdTestimonialCard";

export interface TypeXdSetOfTestimonialCardsFields {
    title?: EntryFieldTypes.Symbol;
    caption?: EntryFieldTypes.Symbol;
    testimonialCards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdTestimonialCardSkeleton>>;
}

export type TypeXdSetOfTestimonialCardsSkeleton = EntrySkeletonType<TypeXdSetOfTestimonialCardsFields, "xdSetOfTestimonialCards">;
export type TypeXdSetOfTestimonialCards<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSetOfTestimonialCardsSkeleton, Modifiers, Locales>;

export function isTypeXdSetOfTestimonialCards<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdSetOfTestimonialCards<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdSetOfTestimonialCards'
}
