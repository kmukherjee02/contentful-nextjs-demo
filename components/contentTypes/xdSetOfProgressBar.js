import XDProgressBar from "./xdProgressBar";

export default function XDSetOfProgressBar({entry}){
    //console.log(entry);
    const progressBars = entry.map((item,index) => {
        return ( <XDProgressBar entry={item.fields} key={index} /> )
    })
    
    return (
        <>
            {progressBars}
        </>
    )
}