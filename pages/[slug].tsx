import { GetStaticProps, GetStaticPaths } from 'next';
import LandingPage from '@components/LandingPage';
import PageNotFound from '@components/PageNotFound';
import {
	fetchXDLandingEntriesBySlug,
	fetchAllXDLandingEntries,
} from '@lib/service/api';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { SlugPageProps } from 'types';

export default function Slug({ preview, page }: SlugPageProps) {
	const data = useContentfulLiveUpdates(page);

	if (JSON.stringify(data) !== '{}') {
		return <LandingPage preview={preview} entry={data} />;
	}
	return <PageNotFound preview={preview} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await fetchAllXDLandingEntries();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({
	params,
	preview = false,
}) => {
	const homePage = await fetchXDLandingEntriesBySlug(
		preview,
		params.slug as string
	);
	if (homePage?.length > 0) {
		return {
			props: {
				preview: preview,
				page: homePage[0],
			},
		};
	}
	return {
		props: {
			page: {},
		},
	};
};
