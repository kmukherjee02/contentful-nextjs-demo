import XDImageWithText from "./xdImageWithText"
import XDSetOfCallToAction from "./xdSetOfCallToActions";
import XDSetOfProgressBar from "./xdSetOfProgressBar";

export default function XDSectionWithImage({entry}){
    const renderDetails = () => {
        //console.log(entry.detail)
        switch(entry.detail.sys.contentType.sys.id){
            case 'xdSetOfCallToAction' :
                return ( 
                    <div className="grid gap-6 mt-8 sm:grid-cols-2">
                        <XDSetOfCallToAction entry={entry.detail.fields.setOfCta} />
                    </div>
                )
                break;
            case 'xdSetOfProgressBar' : 
                return ( 
                    <div className="mt-8">  
                        <XDSetOfProgressBar entry={entry.detail.fields.progressBars} />
                    </div> 
                )
                break;
            default:
                console.log("Section type not found: " + entry.detail.sys.contentType.id);
                return ( <div data-content-type='not-found'>Illegal Section Type</div> )    
        }
    }

    return (
        <>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            {entry.imageWithTextAlignment === 'left' && <XDImageWithText entry={entry.imageWithText.fields} />}
            <div className="w-full lg:w-1/2 mx-16">
                <div className="lg:max-w-lg">
                    <h2 class="text-sm title-font font-bold text-orange-500 tracking-widest mb-1">{entry.caption}</h2>
                    <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">{entry.title}</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{entry.description}</p>
                    {renderDetails()} 
                </div>
            </div>
            {entry.imageWithTextAlignment === 'right' && <XDImageWithText entry={entry.imageWithText.fields} />}
        </div>
        </>
    )
}
