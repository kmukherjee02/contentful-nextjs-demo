import XDProgressBar from "./xdProgressBar";

interface IXDProgressBarProps {
	entry: Record<string, any>;
}

const XDSetOfProgressBar = ({entry}: IXDProgressBarProps) => {
    const progressBars: JSX.Element = entry.map((item: Record<string, any>, index: number) => {
        return ( <XDProgressBar entry={item.fields} key={index} /> )
    })
    
    return (
        <>
            {progressBars}
        </>
    )
}

export default XDSetOfProgressBar;