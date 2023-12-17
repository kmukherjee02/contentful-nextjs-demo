import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdPersonSkeleton } from "./TypeXdPerson";

export interface TypeXdTestimonialCardFields {
    name?: EntryFieldTypes.Symbol;
    rating?: EntryFieldTypes.Number;
    testimonial?: EntryFieldTypes.Text;
    receivedFrom?: EntryFieldTypes.EntryLink<TypeXdPersonSkeleton>;
}

export type TypeXdTestimonialCardSkeleton = EntrySkeletonType<TypeXdTestimonialCardFields, "xdTestimonialCard">;
export type TypeXdTestimonialCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdTestimonialCardSkeleton, Modifiers, Locales>;
