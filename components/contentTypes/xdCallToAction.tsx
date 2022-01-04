import Link from "next/link"
import ButtonAnimated from '../ButtonAnimated'

interface IXDCallToActionProps {
	entry: Record<string, any>;
}

const XDCallToAction:React.FC<IXDCallToActionProps> = ({entry}: IXDCallToActionProps) =>  {   
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