import XDTeamMember from "./xdTeamMember";

interface IXdSetOfTeamMemberProps {
    entry: {
        cards: Record<string, any>[],
        [key: string]: any;
    };
}


export default function xdSetOfTeamMembers({ entry }: IXdSetOfTeamMemberProps){
    console.log('team members :: ', entry);
    const teamMemberCards = entry.teamMembers.map((item: { fields: Record<string, any>; }, index: number) => {
        console.log('fields ', item );
        return (
            <XDTeamMember entry={item.fields} key={index} />
        )
    })
    return (


<section className="text-gray-400 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
    <h1 className="text-2xl font-medium title-font mb-4 text-white">{entry.title}</h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{entry.caption}</p>
  </div>
  <div className="flex flex-wrap -m-4">
       {teamMemberCards}
  </div>
</div>
</section>
    )
}