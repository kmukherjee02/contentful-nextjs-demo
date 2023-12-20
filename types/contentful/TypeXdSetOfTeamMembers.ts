import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdPersonSkeleton } from "./TypeXdPerson";

export interface TypeXdSetOfTeamMembersFields {
    title?: EntryFieldTypes.Symbol;
    caption?: EntryFieldTypes.Symbol;
    teamMembers?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdPersonSkeleton>>;
}

export type TypeXdSetOfTeamMembersSkeleton = EntrySkeletonType<TypeXdSetOfTeamMembersFields, "xdSetOfTeamMembers">;
export type TypeXdSetOfTeamMembers<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSetOfTeamMembersSkeleton, Modifiers, Locales>;

export function isTypeXdSetOfTeamMembers<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdSetOfTeamMembers<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdSetOfTeamMembers'
}
