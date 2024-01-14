'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ContentfulLivePreview } from '@contentful/live-preview';
import ContentfulImage from '@components/ContentfulImage';
import XDNavigationMenu from '@components/contentTypes/xdNavigationMenu';
import XDCallToAction from '@components/contentTypes/xdCallToAction';
import MobileNavHamburgerIcon from '@icons/mobile-nav-hamburger.svg';
import XIcon from '@icons/x.svg';
// import { useCloseNavOnUrlChange } from '@lib/hooks/hooks';
import { XDCallToActionProps, XDHeaderProps } from 'types';
import cn from 'classnames';
import { Asset } from 'contentful';

const XDHeaderLogo = ({
	logo,
	href,
}: {
	logo: Asset<'WITHOUT_UNRESOLVABLE_LINKS', 'en-US'>;
	href?: string;
}) => {
	const src = logo?.fields?.file?.url;
	return (
		<>
			{src && (
				<Link
					className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
					href={href || '#'}
				>
					<ContentfulImage
						src={src}
						width={123}
						height={35}
						alt={logo?.fields?.file?.fileName || 'header logo'}
					/>
				</Link>
			)}
		</>
	);
};

const XDHeader = ({ entry }: XDHeaderProps) => {
	const { fields, sys } = entry;
	const contentfulInspectorProps = { entryId: sys?.id };

	const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
	const [fixedHeader, setFixedHeader] = useState<boolean>(false);

	// useCloseNavOnUrlChange(setIsMobileNavOpen);

	useEffect(() => {
		const mobileNavMenu = document.querySelector('.mobile-nav-menu');
		window.addEventListener('resize', () => {
			setIsMobileNavOpen(false);
		});
		if (!isMobileNavOpen && mobileNavMenu) {
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
				)}
			>
				<div className='container mx-auto flex items-center justify-between relative'>
					<div
						{...ContentfulLivePreview.getProps({
							...contentfulInspectorProps,
							fieldId: 'logo',
						})}
					>
						{!fixedHeader && fields.logo && (
							<XDHeaderLogo
								logo={fields.logo}
								href={fields.logoHyperlink}
							/>
						)}
						{fixedHeader && fields.logoAlt && (
							<XDHeaderLogo
								logo={fields.logoAlt}
								href={fields.logoHyperlink}
							/>
						)}
					</div>
					<div className='hidden flex-1 lg:flex justify-around'>
						{fields.navigation && (
							<XDNavigationMenu
								entry={fields.navigation}
								fixedHeader={fixedHeader}
							/>
						)}
						<div
							{...ContentfulLivePreview.getProps({
								...contentfulInspectorProps,
								fieldId: 'callToAction',
							})}
						>
							<XDCallToAction
								entry={
									fields.callToAction as XDCallToActionProps['entry']
								}
							/>
						</div>
					</div>

					{/* mobile nav */}
					<div className='lg:hidden flex items-center justify-end'>
						<button
							onClick={() => {
								setIsMobileNavOpen(!isMobileNavOpen);
							}}
						>
							<span
								className={isMobileNavOpen ? 'hidden' : 'block'}
							>
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
								className={isMobileNavOpen ? 'block' : 'hidden'}
							>
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
					{fields.navigation && (
						<XDNavigationMenu
							entry={fields.navigation}
							fixedHeader={fixedHeader}
							isMobile
							isMobileNavOpen={isMobileNavOpen}
						/>
					)}
				</div>
			</header>
		</div>
	);
};

export default XDHeader;
