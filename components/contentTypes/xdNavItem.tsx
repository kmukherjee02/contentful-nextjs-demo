import Link from 'next/link';
import cn from 'classnames';

interface IXDNavigationItemProps {
	entry: Record<string, any>;
    isChildNavItem?:  boolean;
}

const XDNavItem = ({entry, isChildNavItem}: IXDNavigationItemProps) => {
   
    let childMenu = entry.children?.map((item: Record<string, any>, idx:number) => {
        return (
            <XDNavItem entry={item.fields} key={idx} isChildNavItem />
        )
    })
    const navItemClasses:string = cn('flex text-sm font-medium', {
        'text-white': isChildNavItem === undefined
    })
    return (
        <li className='list-none'>
            <div className='p-4'>
            {entry.slug ? 
                <Link href={entry.slug} passHref> 
                    <button className={navItemClasses}>{entry.label}</button>
                </Link>
                :
                <div className='group relative'>
                    <button className={navItemClasses}>{entry.label}
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-3 w-3 mt-1 ml-0.5' fill='none' viewBox='0 0 24 24' stroke='white'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='4' d='M19 9l-7 7-7-7' />
                        </svg>
                    </button>
                    <nav tabIndex={0} className='border border-2 bg-white invisible border-gray-800 rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1'>
                        <ul className='py-1'>    
                            {childMenu}  
                        </ul>
                    </nav>    
                </div>
            }
            </div>
        </li>
    )
}

export default XDNavItem;