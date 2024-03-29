import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeParagraphOnlyFields {
    title?: EntryFieldTypes.Symbol;
    paragraph?: EntryFieldTypes.Text;
    reviewState?: EntryFieldTypes.Symbol<"Needs changes" | "Needs review" | "Ready to publish">;
    approvedByLegal?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Yes">>;
}

export type TypeParagraphOnlySkeleton = EntrySkeletonType<TypeParagraphOnlyFields, "paragraphOnly">;
export type TypeParagraphOnly<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeParagraphOnlySkeleton, Modifiers, Locales>;

export function isTypeParagraphOnly<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeParagraphOnly<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'paragraphOnly'
}
