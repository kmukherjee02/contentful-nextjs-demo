import ButtonAnimated from '@components/ButtonAnimated';
import { XDCallToActionProps } from "types";


const XDCallToAction = ({entry}: XDCallToActionProps) =>  {   
    const { fields } = entry;

    return (
        <>
           {fields.link ? 
                <ButtonAnimated entry={fields.link} />
            : 
                <ButtonAnimated entry={entry} />
            }
        </>
    )
}

export default XDCallToAction;