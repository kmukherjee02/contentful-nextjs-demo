import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { ContentfulLivePreview } from '@contentful/live-preview';
import XDCallToAction from '@components/contentTypes/xdCallToAction';
import XDCounter from '@components/contentTypes/xdCounter';
import { getAbsoluteImageUrlInWebp } from '@lib/utilities';
import { XDBannerProps } from 'types';
import cn from 'classnames';

const XDBanner = ({ entry }: XDBannerProps) => {
	const {
		fields: { cta, counter, description, image },
		sys,
	} = entry;

	const contentfulInspectorProps = { entryId: sys?.id };

	const bgImgSrc = getAbsoluteImageUrlInWebp(image?.fields?.file?.url);

	const counters = counter?.map((ctr) => {
		if (ctr) return <XDCounter entry={ctr} key={ctr.sys.id} />;
	});
	const buttons = cta?.map((ctaEntry) => {
		if (ctaEntry)
			return <XDCallToAction entry={ctaEntry} key={ctaEntry.sys.id} />;
	});

	// apply styles to rendered rich text
	const H2 = ({ children }) => <h2 className='text-white'>{children}</h2>;
	const P = ({ children }) => (
		<p className='md:text-lg text-white'>{children}</p>
	);
	const options = {
		renderNode: {
			[BLOCKS.HEADING_2]: (
				node: Record<string, any>,
				children: string
			) => <H2>{children}</H2>,
			[BLOCKS.PARAGRAPH]: (
				node: Record<string, any>,
				children: string
			) => <P>{children}</P>,
		},
	};

	return (
		<div
			className={cn(
				'bg-center bg-cover bg-no-repeat w-full border text-center py-12 px-8 relative z-10 before:content-[""] before:h-full before:w-full before:bg-black before:absolute before:top-0 before:left-0 before:opacity-60 before:-z-10',
				{
					'bg-fixed': counter,
					'h-80': !counter && !description,
				}
			)}
			style={{ backgroundImage: `url(${bgImgSrc})` }}
			{...ContentfulLivePreview.getProps({
				...contentfulInspectorProps,
				fieldId: 'image',
			})}
		>
			{counter && (
				<div
					className='flex flex-col md:flex-row justify-around items-center my-8'
					{...ContentfulLivePreview.getProps({
						...contentfulInspectorProps,
						fieldId: 'counter',
					})}
				>
					{counters}
				</div>
			)}
			{description && (
				<div
					className='banner-description md:w-3/5 mx-auto'
					{...ContentfulLivePreview.getProps({
						...contentfulInspectorProps,
						fieldId: 'description',
					})}
				>
					<div className='mb-8'>
						{documentToReactComponents(description, options)}
					</div>
					{cta && (
						<div
							className='flex flex-col md:flex-row justify-center items-center'
							{...ContentfulLivePreview.getProps({
								...contentfulInspectorProps,
								fieldId: 'cta',
							})}
						>
							{buttons}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default XDBanner;
