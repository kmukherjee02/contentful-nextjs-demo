import Link from "next/link";
import cn from 'classnames'

export default function XDLink({entry}){
    return (
        <>
            {
                entry.isExternal ? 
                    <a target={entry.target} className={`${entry.displayStyle} === 'Button' : ${buttonClasses}: ${linkClasses}`}>{entry.label}</a>
                :
                <Link href={entry.href} passHref>
                    <a target={entry.target} className={cn('inline-flex py-2 mr-2 text-lg', {
                        'px-6 text-blue bg-secondary-normal hover:bg-secondary-hover hover:text-white border-0 focus:outline-none rounded' : entry.displayStyle === 'Button' && entry.theme === 'secondary',
                        'px-6 text-white bg-primary-normal hover:bg-primary-hover border-0 focus:outline-none rounded' : entry.displayStyle === 'Button' && entry.theme === 'primary',
                        'cursor-pointer underline text-primary-normal' : entry.displayStyle === 'Link',
                    })}>
                        {entry.label}
                    </a>
                </Link>
            }
        </>
    )
}