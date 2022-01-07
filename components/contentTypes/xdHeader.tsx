import ContentfulImage from '../contentful-image'
import Link from 'next/link';
import XDNavigationMenu from './xdNavigationMenu';
import XDCallToAction from './xdCallToAction';

interface IXDHeaderProps {
	entry: Record<string, any>;
}

const XDHeader = ({entry}: IXDHeaderProps) => {
    return (
        <div className="bg-transparent">
            <header className="sticky top-0 z-50 text-gray-600 body-font bg-transparent">
                <div className="container mx-auto flex items-center justify-between">
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
                    {/* mobile hamburger */}
                    <div className="lg:hidden flex items-center justify-end">
                        <button className="outline-none mobile-menu-button">
                            <svg
                                className="w-12 h-8 text-gray-500"
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="4"
                                viewBox="0 0 40 24"
                                stroke="white"
                            >
                                <path d="M4 6h30M4 12h30M4 18h30"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default XDHeader;