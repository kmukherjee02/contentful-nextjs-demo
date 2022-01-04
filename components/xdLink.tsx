import Link from "next/link";
import ButtonAnimated from "./ButtonAnimated";

const defaultClassnames:string = 'inline-flex py-2 mr-2 text-lg cursor-pointer underline text-primary-normal'

interface IXDLinkProps {
	entry: Record<string, any>;
    className?: string;
    key?: number;
}
const XDLink = ({entry, className=defaultClassnames}: IXDLinkProps) => {
    const buttonClasses: string = '';
    const linkClasses: string = '';
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

export default XDLink;