import Container from './Container';
import Layout from './Layout';
import Head from 'next/head';
import Sections from './Sections';
import { LandingPageProps } from 'types';

export default function LandingPage(props: LandingPageProps) {
    const { entry: { fields }, draftMode } = props

	return (
		<Layout draftMode={draftMode}>
			<Head>
				<title>{fields.name}</title>
			</Head>
			<Container>
				<Sections sections={fields.sections} />
			</Container>
		</Layout>
	);
}
