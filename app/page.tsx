import LandingPage from "@components/LandingPage";
import { fetchXDLandingEntriesBySlug } from "@lib/service/api";
import { draftMode } from "next/headers";

export default async function Page () {
    const { isEnabled } = draftMode();

    const entry = await fetchXDLandingEntriesBySlug(isEnabled);
    
    return (
        // <LandingPage draftMode={isEnabled} entry={entry} />
        <h1>Hello World</h1>
    )
}