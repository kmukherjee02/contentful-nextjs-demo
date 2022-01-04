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
                <div className="text-center mb-[35px]">
                    <h2 className="section-subtitle text-orange-light tracking-widest mb-1 text-orange-500">{entry.caption}</h2>
                    <h1 className="section-title mb-4">{entry.title}</h1>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {cards}
                </div>
            </div>
        </section>
    )
}