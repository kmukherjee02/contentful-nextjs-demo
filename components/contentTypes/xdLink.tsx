import Link from "next/link";
import ButtonAnimated from "../ButtonAnimated";
import cn from 'classnames';

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
                <>
                    {entry.displayStyle === 'Button' ? 
                        <>
                            <ButtonAnimated entry={entry} />
                        </>
                    :  
                        <Link href={entry.href} passHref>
                            <a target={entry.target} className={cn(className, {
                                'link-primary': entry.theme === 'primary',
                                'link-secondary': entry.theme === 'secondary',
                                'link-tertiary': entry.theme === 'tertiary'
                            })}>
                                {entry.label}
                            </a>
                        </Link>
                    }
                </>
            }
        </>
    )
}

export default XDLink;