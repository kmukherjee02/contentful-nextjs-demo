import { GetStaticProps } from 'next';
import LandingPage from '@components/LandingPage';
import { fetchXDLandingEntriesBySlug } from '@lib/service/api';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

export default function Index({ preview, page }) {
	const data = useContentfulLiveUpdates(page);

	return <LandingPage preview={preview} page={data.fields} />;
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
