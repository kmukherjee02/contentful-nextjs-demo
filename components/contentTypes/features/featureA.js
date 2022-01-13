import XDIcon from '../xdIcon';
import XDLink from '../xdLink';

export default function featureA({entry}){
    //console.log(entry);
    const title = entry.title;
    const description = entry.description;
    const displayStyle = entry.displayStyle;
    const image = entry.image;
    const link = entry.link;
    const features = entry.features.map((item, index) => {
        if (!item || !item.fields) return null;
        const featureTitle = item.fields.title;
        const featureDescription = item.fields.description;
        const featureLink = item.fields.link;
        const featureIcon = item.fields.icon;
        return (
            <div className="p-4 md:w-1/3 flex" key={index}>
                {featureLink && featureIcon.fields && (
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                        <XDIcon entry={featureIcon.fields} key={index} />
                    </div>  
                )}
                <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{featureTitle}</h2>
                    <p className="leading-relaxed text-base">{featureDescription}</p>
                    {featureLink && featureLink.fields && (
                        <XDLink entry={featureLink.fields} key={index} />
                    )}
                </div>
            </div>
        )
    })
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">{title}</h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {features}
                </div>
            </div>
        </section>
    )
}