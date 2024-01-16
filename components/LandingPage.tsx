import { draftMode } from 'next/headers';
import Container from './Container';
import Sections from './Sections';
import { LandingPageProps } from 'types';
import Alert from '@components/Alert';

export default function LandingPage(props: LandingPageProps) {
	const {
		entry: {
			fields: { sections },
		},
	} = props;

	const { isEnabled } = draftMode();

	return (
		<>
			{isEnabled && <Alert />}
			<Container>
				<Sections sections={sections} />
			</Container>
		</>
	);
}
