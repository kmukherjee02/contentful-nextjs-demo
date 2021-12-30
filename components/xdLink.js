import Link from "next/link";
import ButtonAnimated from "./ButtonAnimated";

export default function XDLink({entry}){
    return (
        <>
            {
                entry.isExternal ? 
                    <a target={entry.target} className={`${entry.displayStyle} === 'Button' : ${buttonClasses}: ${linkClasses}`}>{entry.label}</a>
                :
                <Link href={entry.href} passHref>
                    {
                        entry.displayStyle === 'Button' ? 
                            <div>
                                <ButtonAnimated entry={entry} />
                            </div>
                        :  
                        <a target={entry.target} className='inline-flex py-2 mr-2 text-lg cursor-pointer underline text-primary-normal'>
                                {entry.label}
                        </a>
                    }
                </Link>
            }
        </>
    )
}