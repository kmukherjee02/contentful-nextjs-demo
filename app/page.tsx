import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import LandingPage from "@components/LandingPage";
import { fetchXDLandingEntriesBySlug } from "@lib/service/api";

export default async function Page () {
    const { isEnabled } = draftMode();

    const entry = await fetchXDLandingEntriesBySlug(isEnabled);

    if (!entry || entry.length === 0) return notFound();
    
    return (
        <LandingPage draftMode={isEnabled} entry={entry[0]} />
    )
}