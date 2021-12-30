import Link from "next/link"
import ButtonAnimated from './ButtonAnimated'



export default function XDCallToAction({entry}){   
    return (
        <>
           {entry.fields.link ? 
                <Link href={`${entry.fields.link.fields.href}`}>
                    <div>
                        <ButtonAnimated entry={entry.fields} />
                    </div>
                </Link>
            : 
                <ButtonAnimated entry={entry.fields} />

            }
        </>
    )
}