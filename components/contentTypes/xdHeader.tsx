import { useEffect, useState } from 'react';
import { useCloseNavOnUrlChange } from '../../lib/hooks/hooks'
import ContentfulImage from '../contentful-image'
import Link from 'next/link';
import XDNavigationMenu from './xdNavigationMenu';
import XDCallToAction from './xdCallToAction';
import MobileNavHamburgerIcon from '../../public/icons/mobile-nav-hamburger.svg';
import XIcon from '../../public/icons/x.svg';
import cn from 'classnames';

interface IXDHeaderProps {
	entry: Record<string, any>;
}
const XDHeader = ({entry}: IXDHeaderProps) => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
    const [fixedHeader, setFixedHeader] = useState<boolean>(false);
    
    useCloseNavOnUrlChange(setIsMobileNavOpen);

    useEffect(() => {
        const mobileNavMenu:HTMLElement = document.querySelector('.mobile-nav-menu');
        window.addEventListener('resize', () => {setIsMobileNavOpen(false)});
        if (!isMobileNavOpen) {setTimeout(() => {mobileNavMenu.scrollTop = 0}, 700)}
    }, [isMobileNavOpen]);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            entry.isIntersecting ? setFixedHeader(false) : setFixedHeader(true)
        }, {threshold: .8});
        const heroDiv = document.querySelector('.hero-image');
        observer.observe(heroDiv);
    }, [fixedHeader]);

    return (
        <div className='h-20'>
            <header className={cn('text-gray-600 body-font w-full py-4 z-50 top-0  left-0', {
                'absolute bg-transparent lg:shadow-none shadow-mobile-header transition duration-[400ms]': !fixedHeader,
                'fixed bg-white shadow-fixed-header animate-fixed-header-fade-in': fixedHeader
            })}>
                <div className='container mx-auto flex items-center justify-between relative'>
                    <Link href={entry.logoHyperlink} passHref>
                        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                            <ContentfulImage 
                                src={fixedHeader ? entry.logoAlt.fields.file.url : entry.logo.fields.file.url} 
                                width={123}
                                height={35}
                                alt={entry.logo.fields.file.title}
                            />
                        </a>
                    </Link>
                    <div className='hidden flex-1 lg:flex justify-around'>
                        <nav className={cn('ml-16 flex justify-center items-center', {
                            'text-white': !fixedHeader,
                        })}>
                            <XDNavigationMenu entry={entry.navigation} fixedHeader={fixedHeader}/> 
                        </nav>
                        <XDCallToAction entry={entry.callToAction} />
                    </div>

                    {/* mobile nav */}
                    <div className='lg:hidden flex items-center justify-end'>
                        <button onClick={() => {setIsMobileNavOpen(!isMobileNavOpen)}}>
                            <span className={isMobileNavOpen ? 'hidden' : 'block'}>
                                <MobileNavHamburgerIcon height={20} width={40} className={cn('', {
                                    'stroke-black': fixedHeader,
                                    'stroke-white': !fixedHeader
                                })} />
                            </span>
                            <span className={isMobileNavOpen ? 'block' : 'hidden'}>
                                <XIcon height={25} width={40} className={cn('', {
                                    'fill-black': fixedHeader,
                                    'fill-white': !fixedHeader
                                })} />
                            </span>
                        </button>
                    </div>
                    <nav className={`${isMobileNavOpen ?' h-[300px]' : 'h-0'} w-[95%] bg-white absolute top-full left-1/2 -translate-x-1/2 mt-2 overflow-y-scroll transition-[height] duration-300 ease-in shadow-mobile-nav-menu mobile-nav-menu`}>
                        <XDNavigationMenu entry={entry.navigation} fixedHeader={fixedHeader} isMobile />
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default XDHeader;