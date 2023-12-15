import { useEffect, useState } from 'react';
import { useCloseNavOnUrlChange } from '../../lib/hooks/hooks';
import ContentfulImage from '../ContentfulImage';
import Link from 'next/link';
import XDNavigationMenu from './xdNavigationMenu';
import XDCallToAction from './xdCallToAction';
import MobileNavHamburgerIcon from '../../public/icons/mobile-nav-hamburger.svg';
import XIcon from '../../public/icons/x.svg';
import cn from 'classnames';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

interface IXDHeaderProps {
	entry: Record<string, any>;
	sys: Record<string, unknown>;
}
const XDHeader = ({ entry, sys }: IXDHeaderProps) => {
	const inspectorProps = useContentfulInspectorMode({ entryId: sys?.id });

	const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
	const [fixedHeader, setFixedHeader] = useState<boolean>(false);

	useCloseNavOnUrlChange(setIsMobileNavOpen);

	useEffect(() => {
		const mobileNavMenu: HTMLElement =
			document.querySelector('.mobile-nav-menu');
		window.addEventListener('resize', () => {
			setIsMobileNavOpen(false);
		});
		if (!isMobileNavOpen) {
			setTimeout(() => {
				mobileNavMenu.scrollTop = 0;
			}, 700);
		}
	}, [isMobileNavOpen]);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				entry.isIntersecting
					? setFixedHeader(false)
					: setFixedHeader(true);
			},
			{ threshold: 0.8 }
		);
		const heroDiv = document.querySelector('.hero-image');
		if (heroDiv) {
			observer.observe(heroDiv);
		}
	}, [fixedHeader]);

	return (
		<div className='h-20'>
			<header
				className={cn(
					'text-gray-600 body-font w-full py-4 z-50 left-0',
					{
						'absolute bg-transparent lg:shadow-none shadow-mobile-header transition duration-[400ms]':
							!fixedHeader,
						'fixed bg-white shadow-fixed-header animate-fixed-header-fade-in':
							fixedHeader,
					}
				)}>
				<div className='container mx-auto flex items-center justify-between relative'>
					<div {...inspectorProps({ fieldId: 'logo' })}>
						<Link href={entry.logoHyperlink} passHref>
							<a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
								<ContentfulImage
									src={
										fixedHeader
											? entry.logoAlt.fields.file.url
											: entry.logo.fields.file.url
									}
									width={123}
									height={35}
									alt={entry.logo.fields.file.title}
								/>
							</a>
						</Link>
					</div>
					<div className='hidden flex-1 lg:flex justify-around'>
						<XDNavigationMenu
							entry={entry.navigation}
							fixedHeader={fixedHeader}
						/>
						<div {...inspectorProps({ fieldId: 'callToAction' })}>
							<XDCallToAction entry={entry.callToAction} />
						</div>
					</div>

					{/* mobile nav */}
					<div className='lg:hidden flex items-center justify-end'>
						<button
							onClick={() => {
								setIsMobileNavOpen(!isMobileNavOpen);
							}}>
							<span
								className={
									isMobileNavOpen ? 'hidden' : 'block'
								}>
								<MobileNavHamburgerIcon
									height={20}
									width={40}
									className={cn('', {
										'stroke-black': fixedHeader,
										'stroke-white': !fixedHeader,
									})}
								/>
							</span>
							<span
								className={
									isMobileNavOpen ? 'block' : 'hidden'
								}>
								<XIcon
									height={25}
									width={40}
									className={cn('', {
										'fill-black': fixedHeader,
										'fill-white': !fixedHeader,
									})}
								/>
							</span>
						</button>
					</div>
					<XDNavigationMenu
						entry={entry.navigation}
						fixedHeader={fixedHeader}
						isMobile
						isMobileNavOpen={isMobileNavOpen}
					/>
				</div>
			</header>
		</div>
	);
};

export default XDHeader;
