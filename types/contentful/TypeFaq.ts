import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFaqFields {
    name?: EntryFieldTypes.Symbol;
    subtext: EntryFieldTypes.Symbol;
    question: EntryFieldTypes.RichText;
    answer?: EntryFieldTypes.RichText;
}

export type TypeFaqSkeleton = EntrySkeletonType<TypeFaqFields, "faq">;
export type TypeFaq<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFaqSkeleton, Modifiers, Locales>;
