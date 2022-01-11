import { useEffect } from "react";
import {initHomeAnimation} from "../animation/homeSplashScreen"
import ContentfulImage from '../contentful-image';
import {getBackgroundImageUrl} from '@lib/utilities';
import XDLink from './xdLink';
import cn from 'classnames';

interface IXDHeroImageProps {
	entry: Record<string, any>;
}

const XDHeroImage = ({entry}: IXDHeroImageProps) => {
    const buttons = entry.buttons?.map((item: Record<string, any>,index: number) => {
        return (
            <XDLink entry={item.fields} key={index} />
        )
    });
    const backgroundImage = getBackgroundImageUrl(entry.backgroundImage?.fields?.file?.url);
    useEffect ( ()=> {initHomeAnimation(); }, [] );
    return (
        <div 
            className={cn('bg-gradient-to-b from-hero-bg-500 via-hero-bg-400 via-hero-bg-300 via-hero-bg-200 to-hero-bg-100 flex justify-center w-full max-h-[900px] -mt-20 pt-8 md:pt-16 lg:pt-24 relative z-10 hero-image', {
                [`${backgroundImage}`] : backgroundImage !== undefined
            })}>
            <section className='text-gray-600 body-font'>
                <div className='container mx-auto py-24 flex lg:flex-row flex-col items-center '>
                    <div className='splash-stage lg:flex-grow lg:w-1/2 flex flex-col items-center mb-12 xl:pr-20 pr-5'>
                        <h1 className='splash-title text-white text-center lg:text-left text-3xl lg:text-[3.4rem] leading-normal mb-5'>
                            {entry.title}
                        </h1>
                        <p className='splash-description text-center lg:text-left text-white mb-8'>
                            {entry.description}
                        </p>
                        <div className='splash-buttons mx-auto flex flex-col md:flex-row justify-center md:justify-evenly lg:justify-start w-1/2 lg:w-full'>
                            {buttons}
                        </div>
                    </div>
                    {entry.image?.fields.file.url && 
                        <div className='splash-image lg:max-w-lg lg:w-1/2'>
                            <ContentfulImage 
                                src={entry.image.fields.file.url} 
                                width={550}
                                height={533}
                                alt={entry.image.fields.file.title}
                            />
                        </div>
                    }    
                </div>
            </section>
            <div className='absolute -bottom-px -z-10'>
                <img src='/images/hero-bottom-shape.png' alt='hero-bottom'/> 
            </div>
        </div>
    )
}

export default XDHeroImage;