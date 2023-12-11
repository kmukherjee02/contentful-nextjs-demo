import XDImageWithText from './xdImageWithText';
import XDSetOfCallToAction from './xdSetOfCallToActions';
import XDSetOfProgressBar from './xdSetOfProgressBar';
import ButtonAnimated from '../ButtonAnimated';
import cn from 'classnames';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

interface IXDSectionWithImageProps {
	entry: Record<string, any>;
    sys: Record<string, unknown>;
}

const XDSectionWithImage = ({ entry, sys }: IXDSectionWithImageProps) =>  {
    const inspectorProps = useContentfulInspectorMode({ entryId: sys?.id });
    
	const renderDetails = () : JSX.Element => {
		switch (entry.detail.sys.contentType.sys.id) {
			case 'xdSetOfCallToAction':
				return (
					<div className='grid gap-6 mt-8 sm:grid-cols-2'>
						<XDSetOfCallToAction
							entry={entry.detail.fields.setOfCta}
						/>
					</div>
				);
				break;
			case 'xdSetOfProgressBar':
				return (
					<div className='mt-8'>
						<XDSetOfProgressBar
							entry={entry.detail.fields.progressBars}
						/>
					</div>
				);
				break;
			default:
				console.log(
					'Section type not found: ' + entry.detail.sys.contentType.id
				);
				return (
					<div data-content-type='not-found'>
						Illegal Section Type
					</div>
				);
		}
	};
    const imgWithTextComponent:JSX.Element = entry?.imageWithText?.fields && (
        <div className='mx-auto p-2 lg:p-0 lg:w-2/5' {...inspectorProps({ fieldId: 'imageWithText' })}>
            <XDImageWithText entry={entry?.imageWithText?.fields} />
        </div>
    )

	return (
		<section className='container mx-auto py-16 lg:py-24'>
			<div className='flex flex-col lg:flex-row lg:items-center justify-between'>
				{entry.imageWithTextAlignment === 'left' && imgWithTextComponent}
				<div className='lg:w-1/2 lg:mr-24 px-3'>
					<h6
						className={cn('', {
							'text-primary-normal': entry.theme === 'primary',
							'text-orange-light': entry.theme === 'secondary',
						})}
                        {...inspectorProps({ fieldId: 'caption' })}
					>
						{entry.caption}
					</h6>
					<h2 className='font-dosis text-2xl lg:text-4xl font-bold  mb-5' {...inspectorProps({ fieldId: 'title' })}>
						{entry.title}
					</h2>
					<p className='text-sm' {...inspectorProps({ fieldId: 'description' })}>
						{entry.description}
					</p>
					<div {...inspectorProps({ fieldId: 'detail' })}>
                        {renderDetails()}
                    </div>
					{entry.button && (
						<div className='inline-block my-4' {...inspectorProps({ fieldId: 'button' })}>
							<ButtonAnimated entry={entry.button.fields} />
						</div>
					)}
				</div>
				{entry.imageWithTextAlignment === 'right' && imgWithTextComponent}
			</div>
		</section>
	);
}

export default XDSectionWithImage;