import { useState } from 'react';
import Link from 'next/link';
import PlusIcon from '@icons/plus.svg';
import MinusIcon from '@icons/minus.svg';
import { useCloseNavOnUrlChange } from '@lib/hooks/hooks';
import { XDNavItemProps } from 'types';
import cn from 'classnames';

const MobileNavItem = ({ entry, isChildNavItem }: XDNavItemProps) => {
	const { fields } = entry;
	const [isChildMenuOpen, setIsChildMenuOpen] = useState<boolean>(false);

	const mobileNavItemClasses: string = cn(
		'flex justify-between text-sm  w-full py-3 pl-8 border-t hover:bg-zinc-50 hover:text-primary-normal',
		{
			'text-trueGray-500': isChildNavItem === undefined,
			'!pl-10 !border-0': isChildNavItem,
		}
	);

	const childMenu = fields?.children?.map((navItem) => {
		if (navItem)
			return (
				<MobileNavItem
					entry={navItem}
					key={navItem.sys.id}
					isChildNavItem
				/>
			);
	});

	useCloseNavOnUrlChange(setIsChildMenuOpen);

	return (
		<li
			className={cn('', {
				'mobile-nav-item': isChildNavItem === undefined,
				'mobile-nav-child-menu-item': isChildNavItem,
			})}
		>
			{fields.slug ? (
				<Link className='w-full' href={fields.slug} passHref>
					<button className={mobileNavItemClasses}>
						{fields.label}
					</button>
				</Link>
			) : (
				<div className='group relative dropdown'>
					<div
						className='flex items-center'
						onClick={() => {
							setIsChildMenuOpen(!isChildMenuOpen);
						}}
					>
						<button className={`${mobileNavItemClasses}`}>
							{fields.label}
							<span
								className={isChildMenuOpen ? 'hidden' : 'block'}
							>
								<PlusIcon height={20} width={20} />
							</span>
							<span
								className={isChildMenuOpen ? 'block' : 'hidden'}
							>
								<MinusIcon height={20} width={20} />
							</span>
						</button>
					</div>
					<nav
						className={`${
							isChildMenuOpen ? 'max-h-[1000px]' : 'max-h-0'
						} overflow-hidden transition-[max-height] duration-500`}
					>
						<ul className='mobile-nav-child-menu'>{childMenu}</ul>
					</nav>
				</div>
			)}
		</li>
	);
};

export default MobileNavItem;
