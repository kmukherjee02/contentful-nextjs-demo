import { GetStaticProps, GetStaticPaths } from 'next';
import LandingPage from '@components/LandingPage';
import PageNotFound from '@components/PageNotFound';
import {
	fetchXDLandingEntriesBySlug,
	fetchAllXDLandingEntries,
} from '@lib/service/api';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { SlugPageProps } from 'types';

export default function Slug({ draftMode, page }: SlugPageProps) {
	const data = useContentfulLiveUpdates(page);

	if (JSON.stringify(data) !== '{}') {
		return <LandingPage draftMode={draftMode} entry={data} />;
	}
	return <PageNotFound draftMode={draftMode} />;
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
	draftMode = false,
}) => {
	const homePage = await fetchXDLandingEntriesBySlug(
		draftMode,
		params?.slug as string
	);
	if (homePage?.length > 0) {
		return {
			props: {
				draftMode: draftMode,
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
