import { SectionsProps } from 'types';
import Section from '@components/Section';

export default function Sections({ sections }: SectionsProps) {

	return (
		<>
			{sections.map((section, idx) => (
				<Section
					sectionType={section.sys.contentType.sys.id}
					section={section}
					key={section.sys.id}
					arrayKey={idx}
				/>
			))}
		</>
	);
}
