import Section from './Section';

type SectionsProps = {
	sections: Record<string, any>[];
};

export default function Sections({ sections }: SectionsProps) {
	return (
		<>
			{sections.map((section, idx) => (
				<Section
					sectionType={section.sys.contentType.sys.id}
					section={section}
					key={section.sys.id}
					arrayKey={idx}
					sys={section.sys}
				/>
			))}
		</>
	);
}
