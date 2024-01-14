import Container from './Container';
import Sections from './Sections';
import { LandingPageProps } from 'types';

export default function LandingPage(props: LandingPageProps) {
	const {
		entry: { fields: {sections} },
	} = props;

	return (
		<Container>
			<Sections sections={sections} />
		</Container>
	);
}
