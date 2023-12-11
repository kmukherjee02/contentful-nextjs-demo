import MobileNavItem from '@components/MobileNavItem';
import XDNavItem from './xdNavItem';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import cn from 'classnames';

interface IXDNavigationMenuProps {
	entry: Record<string, any>;
	fixedHeader: boolean;
	isMobile?: boolean;
	isMobileNavOpen?: boolean;
}

const XDNavigationMenu = ({
	entry,
	fixedHeader,
	isMobile = false,
	isMobileNavOpen = false,
}: IXDNavigationMenuProps) => {

	const inspectorProps = useContentfulInspectorMode({
		entryId: entry.sys?.id,
	});

	const navMenu = entry.fields.navigationItems.map(
		(navItem: Record<string, any>, idx: number) => {
			return isMobile ? (
				<ul className='mobile-nav-menu' key={idx}>
					<MobileNavItem
						entry={navItem.fields}
						fixedHeader={fixedHeader}
					/>
				</ul>
			) : (
				<ul className='nav-menu' key={idx}>
					<XDNavItem
						entry={navItem.fields}
						fixedHeader={fixedHeader}
					/>
				</ul>
			);
		}
	);

	return (
		<nav
			className={cn(`${isMobile ? 'mobile-nav' : 'nav'}`, {
				'w-[95%] bg-white absolute top-full left-1/2 -translate-x-1/2 mt-2 overflow-y-scroll transition-[height] duration-300 ease-in shadow-mobile-nav-menu mobile-nav-menu':
					isMobile,
				'h-[300px]': isMobile && isMobileNavOpen,
				'h-0': isMobile && !isMobileNavOpen,
				'ml-16 flex justify-center items-center': !isMobile,
				'text-white': !isMobile && !fixedHeader,
			})} {...inspectorProps({ fieldId: 'navigationItems' })}>
                {navMenu}
            </nav>
	);
};

export default XDNavigationMenu;
