import XDIcon from '../xdIcon';
import XDLink from '../xdLink';

export default function featureB({entry}){
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
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" key={index}>
                {featureLink && featureIcon.fields && (
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                        <XDIcon entry={featureIcon.fields} key={index} />
                    </div>
                )}
                <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{featureTitle}</h2>
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
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{title}</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">{description}</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {features}
                </div>
                {link && link.fields && (
                    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                )}
            </div>
        </section>
    )
}