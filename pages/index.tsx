import { GetStaticProps } from 'next';
import LandingPage from '@components/LandingPage';
import { fetchXDLandingEntriesBySlug } from '@lib/service/api';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { IndexPageProps } from 'types';

export default function Index({ draftMode, page }: IndexPageProps) {
	const data = useContentfulLiveUpdates(page);

	return <LandingPage draftMode={draftMode} entry={data} />;
}

export const getStaticProps: GetStaticProps = async ({ draftMode = false }) => {
	const homePage = await fetchXDLandingEntriesBySlug(draftMode);
	return {
		props: {
			draftMode: draftMode,
			page: homePage[0],
		},
	};
};
