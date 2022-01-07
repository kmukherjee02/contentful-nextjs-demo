import Link from 'next/link';
import ChevronDown from '../../public/icons/chevron-down.svg'
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
            'nav-item': isChildNavItem === undefined,
            'border border-1 nav-child-menu-item': isChildNavItem,
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
                        <ChevronDown className='h-3 w-3 mt-1 ml-0.5 group-hover:stroke-primary-normal transition duration-500'/>
                    </button>
                    <nav tabIndex={0} className='bg-white h-auto w-60 border border-2 border-gray-800 rounded absolute left-0 top-16 opacity-0 dropdown-menu group-hover:opacity-100 group-hover:top-8 transition-all duration-300 ease-in-out'>
                        <ul className='nav-child-menu top-0'>    
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