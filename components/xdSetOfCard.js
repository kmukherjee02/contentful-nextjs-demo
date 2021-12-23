import XDCard from "./xdCard";

export default function xdSetOfCard({entry}){
     //console.log(entry);
    const cards = entry.cards.map((item,index) => {
        return (
            <XDCard entry={item.fields} key={index} />
        )
    })
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <div className="text-center mb-20">
                    <h2 class="text-sm title-font font-bold text-orange-500 tracking-widest mb-1">{entry.caption}</h2>
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">{entry.title}</h1>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {cards}
                </div>
            </div>
        </section>
    )
}