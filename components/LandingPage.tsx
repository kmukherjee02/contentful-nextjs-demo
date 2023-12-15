import Container from './container';
import Layout from './Layout';
import Head from 'next/head';
import Sections from './sections';

type LandingPageProps = {
	preview: boolean;
	page: Record<string, any>;
};

export default function LandingPage({ preview, page }: LandingPageProps) {
	return (
		<Layout preview={preview}>
			<Head>
				<title>{page.name}</title>
			</Head>
			<Container>
				<Sections sections={page.sections} />
			</Container>
		</Layout>
	);
}