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

export function isTypeXdTestimonialCard<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdTestimonialCard<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdTestimonialCard'
}
