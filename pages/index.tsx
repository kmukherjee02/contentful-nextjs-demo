import { GetStaticProps } from 'next';
import LandingPage from '@components/LandingPage';
import { fetchXDLandingEntriesBySlug } from '@lib/service/api';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { IndexPageProps } from 'types';

export default function Index({ page, preview }: IndexPageProps) {
	const data = useContentfulLiveUpdates(page);

	return <LandingPage preview={preview} entry={data} />;
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const homePage = await fetchXDLandingEntriesBySlug(preview);
	return {
		props: {
			preview: preview,
			page: homePage[0],
		},
	};
};
