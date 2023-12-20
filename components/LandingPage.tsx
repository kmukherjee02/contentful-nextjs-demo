import Container from './Container';
import Layout from './Layout';
import Head from 'next/head';
import Sections from './Sections';
import { LandingPageProps } from 'types';

export default function LandingPage(props: LandingPageProps) {
    const { entry: { fields }, preview } = props

	return (
		<Layout preview={preview}>
			<Head>
				<title>{fields.name}</title>
			</Head>
			<Container>
				<Sections sections={fields.sections} />
			</Container>
		</Layout>
	);
}
