import XDTeamMember from '@components/contentTypes/xdTeamMember';
import { ContentfulLivePreview } from '@contentful/live-preview';
import { XDSetOfTeamMembersProps } from 'types';

export default function XdSetOfTeamMembers({ entry }: XDSetOfTeamMembersProps) {
	const { fields, sys } = entry;

	const contentfulInspectorProps = { entryId: sys?.id };

	const teamMemberCards = fields?.teamMembers?.map((tMCard) => {
		if (tMCard) return <XDTeamMember entry={tMCard} key={tMCard.sys.id} />;
	});

	return (
		<section className='text-gray-400 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-col w-full mb-20 text-center'>
					<h1
						className='mb-4 text-2xl font-medium title-font'
						{...ContentfulLivePreview.getProps({
							...contentfulInspectorProps,
							fieldId: 'title',
						})}
					>
						{fields.title}
					</h1>
					<p
						className='mx-auto text-base leading-relaxed lg:w-2/3'
						{...ContentfulLivePreview.getProps({
							...contentfulInspectorProps,
							fieldId: 'caption',
						})}
					>
						{fields.caption}
					</p>
				</div>
				<div className='flex flex-wrap -m-4'>{teamMemberCards}</div>
			</div>
		</section>
	);
}
