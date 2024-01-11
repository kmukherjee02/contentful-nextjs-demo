import LandingPage from "@components/LandingPage";

import { fetchXDLandingEntriesBySlug } from "@lib/service/api";
import { draftMode } from "next/headers";
import { notFound } from 'next/navigation';

export default async function Slug({ params }: { params: { slug: string } }) {
    const { isEnabled } = draftMode();
    
    const page = await fetchXDLandingEntriesBySlug(isEnabled, params.slug);

    if (!page || page.length === 0) return notFound();


		// return <LandingPage draftMode={isEnabled} entry={page} />;


    return <h1>page</h1>
}