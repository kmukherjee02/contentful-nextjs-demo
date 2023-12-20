import Link from 'next/link';
import ChevronDown from '@icons/chevron-down.svg'
import { XDNavItemProps } from 'types';
import cn from 'classnames';

const XDNavItem = ({entry, fixedHeader, isChildNavItem}: XDNavItemProps) => {
    const { fields } = entry;

    const navItemTransition: string = 'transition duration-500';
    const navItemClasses:string = cn(`flex hover:text-primary-normal ${navItemTransition}`, {
        'font-semibold': !isChildNavItem,
        'font-medium text-neutral-600': isChildNavItem
    });

    let childMenu = fields?.children?.map(navItem => (
            <XDNavItem entry={navItem} key={navItem.sys.id} isChildNavItem />
        )
    );
    
    return (
        <li className={cn('list-none ', {
            'nav-item': isChildNavItem === undefined,
            [`border border-1 hover:bg-zinc-50 ${navItemTransition} nav-child-menu-item`]: isChildNavItem,
        })}>
            <div className='py-2 px-4'>
            {fields?.slug ? 
                <Link href={fields?.slug} passHref> 
                    <button className={navItemClasses}>{fields.label}</button>
                </Link>
            :
                <div className='group relative'>
                    <button className={`${navItemClasses} group-hover:text-primary-normal`}>
                        {fields.label}
                        <ChevronDown className={cn(`h-3 w-3 mt-1 ml-0.5 group-hover:stroke-primary-normal ${navItemTransition}`, {
                            'stroke-neutral-600': fixedHeader
                        })}/>
                    </button>
                    <nav tabIndex={0} className={cn('bg-white h-auto w-60 rounded absolute left-0 top-16 group-hover:top-10 invisible group-hover:visible opacity-0 group-hover:opacity-100  transition-all duration-300 ease-in-out', {
                        'border-2 border-gray-800': !fixedHeader,
                        'shadow-fixed-header-dropdown': fixedHeader
                    })}>
                        <ul className='nav-child-menu'>    
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