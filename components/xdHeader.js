import ContentfulImage from './contentful-image'
import Link from 'next/link';
import XDNavigationMenu from './xdNavigationMenu';
import XDCallToAction from './xdCallToAction';

export default function XDHeader({entry}){
    return (
        <div className="bg-transparent ">
            <header className="sticky top-0 z-50 w-screen text-gray-600 body-font bg-transparent">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Link href={entry.logoHyperlink} passHref>
                            <a>
                                <ContentfulImage 
                                    src={entry.logo.fields.file.url} 
                                    width={123}
                                    height={35}
                                    alt={entry.logo.fields.file.title}
                                />
                            </a>
                        </Link>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <XDNavigationMenu entry={entry.navigation} /> 
                    </nav>
                    <XDCallToAction entry={entry.callToAction} />
                </div>
            </header>
        </div>
    )
}