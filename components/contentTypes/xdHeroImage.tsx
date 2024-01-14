'use client';

import { useEffect } from 'react';

import { ContentfulLivePreview } from '@contentful/live-preview';
import { initHomeAnimation } from '@components/animation/homeSplashScreen';
import ContentfulImage from '@components/ContentfulImage';
import XDLink from '@components/contentTypes/xdLink';
import { XDHeroImageProps } from 'types';
import cn from 'classnames';

const XDHeroImage = ({ entry }: XDHeroImageProps) => {
	const { fields, sys } = entry;

    const contentfulInspectorProps = { entryId: sys?.id };

	const backgroundImage = fields.backgroundImage?.fields?.file?.url;
	const buttons = fields.buttons?.map((link) => {
		if (link) return <XDLink entry={link} key={link.sys.id} />;
	});

	useEffect(() => {
		initHomeAnimation();
	}, []);

	return (
		<div
			className={cn(
				'relative bg-gradient-to-b from-hero-bg-500 via-hero-bg-200 to-hero-bg-100 flex justify-center w-full max-h-[900px] -mt-20 pt-8 md:pt-16 lg:pt-24 z-10 hero-image'
			)}
			style={{
				backgroundImage: backgroundImage
					? `url('${backgroundImage}')`
					: undefined,
			}}
		>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto py-24 flex lg:flex-row flex-col items-center'>
					<div className='splash-stage lg:flex-grow lg:w-1/2 flex flex-col items-center mb-12 xl:pr-20 pr-5'>
						<h1
							className='splash-title text-white text-center lg:text-left text-3xl lg:text-[3.4rem] leading-normal mb-5'
							{...ContentfulLivePreview.getProps({...contentfulInspectorProps, fieldId: 'title'})}
						>
							{fields.title}
						</h1>
						<p
							className='splash-description text-center lg:text-left text-white mb-8'
							{...ContentfulLivePreview.getProps({...contentfulInspectorProps, fieldId: 'description'})}
						>
							{fields.description}
						</p>
						<div
							className='splash-buttons mx-auto flex flex-col md:flex-row justify-center md:justify-evenly lg:justify-start w-1/2 lg:w-full'
							{...ContentfulLivePreview.getProps({...contentfulInspectorProps, fieldId: 'buttons'})}
						>
							{buttons}
						</div>
					</div>
					{fields.image?.fields?.file?.url && (
						<div className='splash-image lg:max-w-lg lg:w-1/2'>
							<ContentfulImage
								src={fields.image.fields.file.url}
								width={550}
								height={533}
								alt={fields.image.fields.title || 'hero image'}
								{...ContentfulLivePreview.getProps({...contentfulInspectorProps, fieldId: 'image'})}
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
