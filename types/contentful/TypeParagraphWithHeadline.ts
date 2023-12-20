import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeParagraphWithHeadlineFields {
    name?: EntryFieldTypes.Symbol;
    headline?: EntryFieldTypes.Symbol;
    paragraph?: EntryFieldTypes.Text;
}

export type TypeParagraphWithHeadlineSkeleton = EntrySkeletonType<TypeParagraphWithHeadlineFields, "paragraphWithHeadline">;
export type TypeParagraphWithHeadline<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeParagraphWithHeadlineSkeleton, Modifiers, Locales>;

export function isTypeParagraphWithHeadline<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeParagraphWithHeadline<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'paragraphWithHeadline'
}
