import { useState } from 'react';
import { useCloseNavOnUrlChange } from '../lib/hooks/hooks' 
import Link from 'next/link';
import PlusIcon from '../public/icons/plus.svg';
import MinusIcon from '../public/icons/minus.svg';
import cn from 'classnames';

interface IMobileNavItemProps {
    entry: Record<string, any>;
    fixedHeader?: boolean;
    isChildNavItem?:  boolean;
}
const MobileNavItem = ({entry, isChildNavItem}: IMobileNavItemProps) => {
    const [isChildMenuOpen, setIsChildMenuOpen] = useState<boolean>(false);
    
    const mobileNavItemClasses:string = cn('flex justify-between text-sm  w-full py-3 pl-8 border-t', {
        'text-trueGray-500': isChildNavItem === undefined,
        'pl-16': isChildNavItem
    })
    let childMenu:JSX.Element = entry.children?.map((item: Record<string, any>, idx:number) => {
        return (
            <MobileNavItem entry={item.fields} key={idx} isChildNavItem />
        )
    });

    useCloseNavOnUrlChange(setIsChildMenuOpen);

    return (
        <li className={cn('', {
            'mobile-nav-item': isChildNavItem === undefined,
            'mobile-nav-child-menu-item': isChildNavItem,
        })}>
            {entry.slug ? 
                <Link href={entry.slug} passHref> 
                    <button className={mobileNavItemClasses}>{entry.label}</button>
                </Link>
            :
                <div className='group relative dropdown'>
                    <div className='flex items-center' onClick={() => {setIsChildMenuOpen(!isChildMenuOpen)}}>
                        <button className={`${mobileNavItemClasses}`}>
                            {entry.label}
                            <span className={isChildMenuOpen ? 'hidden' : 'block'}>
                                <PlusIcon height={20} width={20}/>
                            </span>
                            <span className={isChildMenuOpen ? 'block' : 'hidden'}>
                                <MinusIcon height={20} width={20}/>
                            </span>
                        </button>
                    </div>
                    <nav className={`${isChildMenuOpen ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden transition-[max-height] duration-500`}>
                        <ul className='mobile-nav-child-menu'>    
                            {childMenu}  
                        </ul>
                    </nav>
                </div>
            }
        </li>
    )
}
 
export default MobileNavItem;