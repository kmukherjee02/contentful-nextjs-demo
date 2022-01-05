import XDCallToAction from "./xdCallToAction";

interface IXDSetOfCallToActionProps {
	entry: Record<string, any>;
}

const XDSetOfCallToAction = ({entry}: IXDSetOfCallToActionProps) => {
    let setOfActions = entry.map((item: Record<string, any>, index: number) => {
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

export default XDSetOfCallToAction;