import XDTeamMember from "./xdTeamMember";

interface IXdSetOfTeamMemberProps {
    entry: {
        cards: Record<string, any>[],
        [key: string]: any;
    };
}


export default function xdSetOfTeamMembers({ entry }: IXdSetOfTeamMemberProps){
    const teamMemberCards = entry.teamMembers.map((item: { fields: Record<string, any>; }, index: number) => {
        return (
            <XDTeamMember entry={item.fields} key={index} />
        )
    })
    return (


<section className="text-gray-400 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col w-full mb-20 text-center">
    <h1 className="mb-4 text-2xl font-medium text-white title-font">{entry.title}</h1>
    <p className="mx-auto text-base leading-relaxed lg:w-2/3">{entry.caption}</p>
  </div>
  <div className="flex flex-wrap -m-4">
       {teamMemberCards}
  </div>
</div>
</section>
    )
}