import Link from "next/link"
import ButtonAnimated from './ButtonAnimated'

interface IXDCallToActionProps {
	entry: Record<string, any>;
}

const XDCallToAction = ({entry}: IXDCallToActionProps) =>  {   
    return (
        <>
           {entry.fields.link ? 
                <Link href={`${entry.fields.link.fields.href}`}>
                    <>
                        <ButtonAnimated entry={entry.fields} />
                    </>
                </Link>
            : 
                <ButtonAnimated entry={entry.fields} />

            }
        </>
    )
}

export default XDCallToAction;