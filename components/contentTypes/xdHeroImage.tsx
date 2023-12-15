import { useEffect } from 'react';
import { initHomeAnimation } from '../animation/homeSplashScreen';
import ContentfulImage from '../contentful-image';
import XDLink from './xdLink';
import cn from 'classnames';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

interface IXDHeroImageProps {
	entry: Record<string, any>;
	sys: Record<string, unknown>;
}

const XDHeroImage = ({ entry, sys }: IXDHeroImageProps) => {
	const inspectorProps = useContentfulInspectorMode({ entryId: sys?.id });
    
    const backgroundImage = entry.backgroundImage?.fields?.file?.url;
	const buttons = entry.buttons?.map(
		(item: Record<string, any>, index: number) => {
			return <XDLink entry={item.fields} key={index} />;
		}
	);

	useEffect(() => {
		initHomeAnimation();
	}, []);

	return (
		<div
			className={cn(
				'relative bg-gradient-to-b from-hero-bg-500 via-hero-bg-200 to-hero-bg-100 flex justify-center w-full max-h-[900px] -mt-20 pt-8 md:pt-16 lg:pt-24 z-10 hero-image'
			)}
			style={{
				backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
			}}
			>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto py-24 flex lg:flex-row flex-col items-center' >
					<div className='splash-stage lg:flex-grow lg:w-1/2 flex flex-col items-center mb-12 xl:pr-20 pr-5'>
						<h1
							className='splash-title text-white text-center lg:text-left text-3xl lg:text-[3.4rem] leading-normal mb-5'
							{...inspectorProps({ fieldId: 'title' })}>
							{entry.title}
						</h1>
						<p
							className='splash-description text-center lg:text-left text-white mb-8'
							{...inspectorProps({ fieldId: 'description' })}>
							{entry.description}
						</p>
						<div className='splash-buttons mx-auto flex flex-col md:flex-row justify-center md:justify-evenly lg:justify-start w-1/2 lg:w-full' {...inspectorProps({ fieldId: 'buttons' })}>
							{buttons}
						</div>
					</div>
					{entry.image?.fields.file.url && (
						<div className='splash-image lg:max-w-lg lg:w-1/2'>
							<ContentfulImage
								src={entry.image.fields.file.url}
								width={550}
								height={533}
								alt={entry.image.fields.file.title}
								{...inspectorProps({ fieldId: 'image' })}
							/>
						</div>
					)}
				</div>
			</section>
			{!backgroundImage && (
				<div className='absolute -bottom-px -z-10 h-full w-full bg-no-repeat bg-contain bg-bottom bg-[url(/images/hero-bottom-shape.png)]'></div>
			)}
		</div>
	);
};

export default XDHeroImage;
