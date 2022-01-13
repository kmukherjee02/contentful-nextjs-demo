import XDIcon from '../xdIcon';
import XDLink from '../xdLink';

export default function featureC({entry}){
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
            <div className="flex flex-col mb-10 lg:items-start items-center" key={index}>
                {featureLink && featureIcon.fields && (
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
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
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt="feature" className="object-cover object-center h-full w-full" src={image.fields.file.url} />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    {features}
                </div>
            </div>
        </section>
    )
}