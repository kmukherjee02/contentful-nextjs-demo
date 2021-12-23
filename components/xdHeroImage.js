import ContentfulImage from "./contentful-image";
import XDLink from "./xdLink";

export default function ({ entry }) {
    //console.log(entry);
    const buttons = entry.buttons?.map((item,index) => {
        return (
            <XDLink entry={item.fields} key={index} />
        )
    })
    return (
        <div className="flex justify-center w-full">
            <section className="text-gray-600 body-font mx-50">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{entry.title}</h1>
                        <p className="mb-8 leading-relaxed">{entry.description}</p>
                        <div className="flex justify-center">
                            {buttons}
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <ContentfulImage 
                            src={entry.image.fields.file.url} 
                            width={550}
                            height={533}
                            alt={entry.image.fields.file.title}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}