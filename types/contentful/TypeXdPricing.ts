import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeXdLinkSkeleton } from "./TypeXdLink";

export interface TypeXdPricingFields {
    planName: EntryFieldTypes.Symbol;
    price: EntryFieldTypes.Symbol;
    priceUnit?: EntryFieldTypes.Symbol;
    pricingPeriod?: EntryFieldTypes.Symbol<"/annually" | "/daily" | "/mo" | "/weekly">;
    popular?: EntryFieldTypes.Boolean;
    description?: EntryFieldTypes.RichText;
    button?: EntryFieldTypes.EntryLink<TypeXdLinkSkeleton>;
    note?: EntryFieldTypes.Text;
}

export type TypeXdPricingSkeleton = EntrySkeletonType<TypeXdPricingFields, "xdPricing">;
export type TypeXdPricing<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeXdPricingSkeleton, Modifiers, Locales>;

export function isTypeXdPricing<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeXdPricing<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'xdPricing'
}
