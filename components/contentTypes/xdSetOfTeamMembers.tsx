import XDTeamMember from "./xdTeamMember";
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

interface IXdSetOfTeamMemberProps {
    entry: {
        cards: Record<string, any>[],
        [key: string]: any;
    };
    sys: Record<string, unknown>;
}


export default function XdSetOfTeamMembers({ entry, sys }: IXdSetOfTeamMemberProps){
    const inspectorProps = useContentfulInspectorMode({entryId: sys?.id});

    const teamMemberCards = entry.teamMembers.map((item: { fields: Record<string, any>; sys:  Record<string, unknown>}, index: number) => {
        return (
            <XDTeamMember entry={item.fields} key={index} sys={item.sys}/>
        )
    })
    return (


<section className="text-gray-400 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col w-full mb-20 text-center">
    <h1 className="mb-4 text-2xl font-medium title-font" {...inspectorProps({ fieldId: 'title' })}>{entry.title}</h1>
    <p className="mx-auto text-base leading-relaxed lg:w-2/3" {...inspectorProps({ fieldId: 'caption' })}>{entry.caption}</p>
  </div>
  <div className="flex flex-wrap -m-4">
       {teamMemberCards}
  </div>
</div>
</section>
    )
}