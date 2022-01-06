import XDCard from "./xdCard";

export default function xdSetOfCard({entry}){
     //console.log(entry);
    const cards = entry.cards.map((item,index) => {
        return (
            <XDCard entry={item.fields} key={index} />
        )
    })
    return (
        <section className="container mx-auto body-font py-24">
            <div className=" px-5">
                <div className="text-center">
                    <h6>{entry.caption}</h6>
                    <h2 className="font-extrabold">{entry.title}</h2>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {cards}
                </div>
            </div>
        </section>
    )
}