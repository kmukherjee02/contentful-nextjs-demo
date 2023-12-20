import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import XDImageWithText from '@components/contentTypes/xdImageWithText';
import XDSetOfCallToAction from '@components/contentTypes/xdSetOfCallToActions';
import XDSetOfProgressBar from '@components/contentTypes/xdSetOfProgressBar';
import ButtonAnimated from '@components/ButtonAnimated';
import {
	XDSectionWithImageProps,
	XDSetOfCallToActionProps,
	XDSetOfProgressBarProps,
} from 'types';
import cn from 'classnames';

const XDSectionWithImage = ({ entry }: XDSectionWithImageProps) => {
	const { fields, sys } = entry;

	const inspectorProps = useContentfulInspectorMode({ entryId: sys?.id });

	const renderDetails = (): JSX.Element => {
		switch (fields.detail.sys.contentType.sys.id) {
			case 'xdSetOfCallToAction':
				return (
					<div className='grid gap-6 mt-8 sm:grid-cols-2'>
						<XDSetOfCallToAction
							entry={
								fields.detail as XDSetOfCallToActionProps['entry']
							}
						/>
					</div>
				);
				break;
			case 'xdSetOfProgressBar':
				return (
					<div className='mt-8'>
						<XDSetOfProgressBar
							entry={
								fields.detail as XDSetOfProgressBarProps['entry']
							}
						/>
					</div>
				);
				break;
			default:
				console.log(
					'Section type not found: ' +
						fields.detail.sys.contentType.sys.id
				);
				return (
					<div data-content-type='not-found'>
						Illegal Section Type
					</div>
				);
		}
	};
	const imgWithTextComponent: JSX.Element = fields?.imageWithText && (
		<div
			className='mx-auto p-2 lg:p-0 lg:w-2/5'
			{...inspectorProps({ fieldId: 'imageWithText' })}>
			<XDImageWithText entry={fields?.imageWithText} />
		</div>
	);

	return (
		<section className='container mx-auto py-16 lg:py-24'>
			<div className='flex flex-col lg:flex-row lg:items-center justify-between'>
				{fields.imageWithTextAlignment === 'left' &&
					imgWithTextComponent}
				<div className='lg:w-1/2 lg:mr-24 px-3'>
					<h6
						className={cn('', {
							'text-primary-normal': fields.theme === 'primary',
							'text-orange-light': fields.theme === 'secondary',
						})}
						{...inspectorProps({ fieldId: 'caption' })}>
						{fields.caption}
					</h6>
					<h2
						className='font-dosis text-2xl lg:text-4xl font-bold  mb-5'
						{...inspectorProps({ fieldId: 'title' })}>
						{fields.title}
					</h2>
					<p
						className='text-sm'
						{...inspectorProps({ fieldId: 'description' })}>
						{fields.description}
					</p>
					<div {...inspectorProps({ fieldId: 'detail' })}>
						{renderDetails()}
					</div>
					{fields.button && (
						<div
							className='inline-block my-4'
							{...inspectorProps({ fieldId: 'button' })}>
							<ButtonAnimated entry={fields.button} />
						</div>
					)}
				</div>
				{fields.imageWithTextAlignment === 'right' &&
					imgWithTextComponent}
			</div>
		</section>
	);
};

export default XDSectionWithImage;
