import XDCallToAction from "./xdCallToAction";

export default function XDSetOfCallToAction({entry}){
    let setOfActions = entry.map((item,index) => {
        return (
            <XDCallToAction entry={item} key={index} />
        )
    })
    return (
        <>
            {setOfActions}
        </>
    )
}