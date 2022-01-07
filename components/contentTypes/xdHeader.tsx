import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import ContentfulImage from '../contentful-image'
import Link from 'next/link';
import XDNavigationMenu from './xdNavigationMenu';
import XDCallToAction from './xdCallToAction';
import MobileNavHamburgerIcon from '../../public/icons/mobile-nav-hamburger.svg';
import XIcon from '../../public/icons/x.svg';

interface IXDHeaderProps {
	entry: Record<string, any>;
}
const XDHeader = ({entry}: IXDHeaderProps) => {
    const router = useRouter();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleRouteChange = () => {setIsMobileNavOpen(false)}
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {router.events.off('routeChangeStart', handleRouteChange)}
    }, [router.events]);

    useEffect(() => {
        const mobileNavMenu = document.querySelector('.mobile-nav-menu');
        if (!isMobileNavOpen) {
            setTimeout(() => {
                mobileNavMenu.scrollTop = 0;
            }, 700);
        }
    }, [isMobileNavOpen]);

    return (
        <div className="h-20 bg-transparent">
            <header className="sticky z-50 top-0 text-gray-600 body-font bg-transparent py-4 lg:shadow-none shadow-mobile-header">
                <div className="container mx-auto flex items-center justify-between relative">
                    <Link href={entry.logoHyperlink} passHref>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <ContentfulImage 
                                src={entry.logo.fields.file.url} 
                                width={123}
                                height={35}
                                alt={entry.logo.fields.file.title}
                            />
                        </a>
                    </Link>
                    <div className="hidden flex-1 lg:flex justify-around">
                        <nav className="ml-16 flex justify-center items-center">
                            <XDNavigationMenu entry={entry.navigation} /> 
                        </nav>
                        <XDCallToAction entry={entry.callToAction} />
                    </div>

                    {/* mobile nav */}
                    <div className="lg:hidden flex items-center justify-end">
                        <button onClick={() => {setIsMobileNavOpen(!isMobileNavOpen)}}>
                            <span className={isMobileNavOpen ? 'hidden' : 'block'}>
                                <MobileNavHamburgerIcon height={20} width={40}/>
                            </span>
                            <span className={isMobileNavOpen ? 'block' : 'hidden'}>
                                <XIcon height={25} width={40} fill={'white'}/>
                            </span>
                        </button>
                    </div>
                    <nav className={`${isMobileNavOpen ?' h-[300px]' : 'h-0'} w-[95%] bg-white absolute top-full left-1/2 -translate-x-1/2 mt-2 overflow-y-scroll transition-[height] duration-300 ease-in mobile-nav-menu`}>
                        <XDNavigationMenu entry={entry.navigation} isMobile />
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default XDHeader;