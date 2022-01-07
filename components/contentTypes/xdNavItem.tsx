import Link from 'next/link';
import cn from 'classnames';

interface IXDNavigationItemProps {
	entry: Record<string, any>;
    isChildNavItem?:  boolean;
}

const XDNavItem = ({entry, isChildNavItem}: IXDNavigationItemProps) => {
    const navItemClasses:string = cn('flex hover:text-primary-normal transition duration-500', {
        'text-white': isChildNavItem === undefined,
        'font-semibold': !isChildNavItem,
        'font-medium': isChildNavItem
    })
    
    let childMenu = entry.children?.map((item: Record<string, any>, idx:number) => {
        return (
            <XDNavItem entry={item.fields} key={idx} isChildNavItem />
        )
    })
    return (
        <li className={cn('list-none', {
            'border border-1': isChildNavItem
        })}>
            <div className='py-2 px-4'>
            {entry.slug ? 
                <Link href={entry.slug} passHref> 
                    <button className={navItemClasses}>{entry.label}</button>
                </Link>
                :
                <div className='group relative dropdown'>
                    <button className={`${navItemClasses} group-hover:text-primary-normal `}>
                        {entry.label}
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-3 w-3 mt-1 ml-0.5 group-hover:stroke-primary-normal transition duration-500' fill='none' stroke='white' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='4' d='M19 9l-7 7-7-7' />
                        </svg>
                    </button>
                    <nav tabIndex={0} className='bg-white h-auto w-60 border border-2 border-gray-800 rounded absolute left-0 top-16 opacity-0 dropdown-menu group-hover:opacity-100 group-hover:top-8 transition-all duration-300 ease-in-out'>
                        <ul className='top-0'>    
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