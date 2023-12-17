import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdPersonSkeleton } from "./TypeXdPerson";

export interface TypeXdSetOfTeamMembersFields {
    title?: EntryFieldTypes.Symbol;
    caption?: EntryFieldTypes.Symbol;
    teamMembers?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdPersonSkeleton>>;
}

export type TypeXdSetOfTeamMembersSkeleton = EntrySkeletonType<TypeXdSetOfTeamMembersFields, "xdSetOfTeamMembers">;
export type TypeXdSetOfTeamMembers<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSetOfTeamMembersSkeleton, Modifiers, Locales>;
