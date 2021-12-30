import Link from "next/link";
import ButtonAnimated from "./ButtonAnimated";

const defaultClassnames = 'inline-flex py-2 mr-2 text-lg cursor-pointer underline text-primary-normal'
export default function XDLink({entry, className=defaultClassnames}){
    return (
        <>
            {
                entry.isExternal ? 
                    <a target={entry.target} className={`${entry.displayStyle} === 'Button' : ${buttonClasses}: ${linkClasses}`}>{entry.label}</a>
                :
                <Link href={entry.href} passHref>
                    {
                        entry.displayStyle === 'Button' ? 
                            <>
                                <ButtonAnimated entry={entry} />
                            </>
                        :  
                        <a target={entry.target} className={className}>
                                {entry.label}
                        </a>
                    }
                </Link>
            }
        </>
    )
}