import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import LandingPage from '@components/LandingPage';
import { fetchXDLandingEntriesBySlug } from '@lib/service/api';
import { toTitleCase } from '@lib/utilities';
import { NextPageWithParamsProps } from 'types';

export async function generateMetadata(
	{ params }: NextPageWithParamsProps,
): Promise<Metadata> {
	const slug = toTitleCase(params.slug)

	return {
		title: slug,
		description: `Xtivia Contentful Next.js Demo - ${slug} page`,
	};
}

export default async function Slug({ params }: NextPageWithParamsProps) {
	const { isEnabled } = draftMode();

	const page = await fetchXDLandingEntriesBySlug(isEnabled, params.slug);

	if (!page || page.length === 0) return notFound();

	return <LandingPage draftMode={isEnabled} entry={page[0]} />;
}
