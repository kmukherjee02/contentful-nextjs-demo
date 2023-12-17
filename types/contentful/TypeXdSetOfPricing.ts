import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdPricingSkeleton } from "./TypeXdPricing";

export interface TypeXdSetOfPricingFields {
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    pricingPeriod?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Annually" | "Daily" | "Monthly" | "Weekly">>;
    pricingPlans: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeXdPricingSkeleton>>;
}

export type TypeXdSetOfPricingSkeleton = EntrySkeletonType<TypeXdSetOfPricingFields, "xdSetOfPricing">;
export type TypeXdSetOfPricing<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdSetOfPricingSkeleton, Modifiers, Locales>;

export function isTypeXdSetOfPricing<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdSetOfPricing<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdSetOfPricing'
}
