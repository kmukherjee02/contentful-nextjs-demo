import MobileNavItem from '@components/MobileNavItem';
import XDNavItem from '@components/contentTypes/xdNavItem';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { XDNavigationMenuProps } from 'types';
import cn from 'classnames';

const XDNavigationMenu = ({
	entry,
	fixedHeader,
	isMobile = false,
	isMobileNavOpen = false,
}: XDNavigationMenuProps) => {
    const { fields, sys } = entry;

	const inspectorProps = useContentfulInspectorMode({
		entryId: sys?.id,
	});

	const navMenu = fields.navigationItems.map(navItem => {
			return isMobile ? (
				<ul className='mobile-nav-menu' key={navItem.sys.id}>
					<MobileNavItem
						entry={navItem}
						fixedHeader={fixedHeader}
					/>
				</ul>
			) : (
				<ul className='nav-menu' key={navItem.sys.id}>
					<XDNavItem
						entry={navItem}
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
			})}
			{...inspectorProps({ fieldId: 'navigationItems' })}>
			{navMenu}
		</nav>
	);
};

export default XDNavigationMenu;
