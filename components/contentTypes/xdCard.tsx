'use client';

import { ContentfulLivePreview } from '@contentful/live-preview';
import XDLink from '@components/contentTypes/xdLink';
import XDIcon from '@components/contentTypes/xdIcon';
import {
	initMouseInCardAnimation,
	initMouseOutCardAnimation,
} from '@components/animation/cardAnimation';
import { XDCardProps } from 'types';
import cn from 'classnames';

export default function XDCard({ entry }: XDCardProps) {
	const { fields, sys } = entry;

	const id = sys.id;

	const contentfulInspectorProps = { entryId: id };

	const iconSize = 'h-14 w-14';
	const cardId = `c${id}`;
	const iconId = fields.icon ? `i${fields.icon.sys.id}` : '';
	const cardSelector = `#${cardId}`; //selector must start with a letter
	const iconSelector = fields.icon ? `${cardSelector} #${iconId}` : '';

	return (
		<div
			id={cardId}
			className='xl:w-1/3 md:w-1/2 p-3'
			onMouseEnter={() =>
				initMouseInCardAnimation(cardSelector, iconSelector)
			}
			onMouseLeave={() =>
				initMouseOutCardAnimation(cardSelector, iconSelector)
			}
		>
			<div className='py-[35px] px-[30px] rounded-lg shadow-lg'>
				{fields.icon && (
					<div
						className={cn(
							`flex items-center justify-center rounded-full text-orange mb-4 ${iconSize}`,
							{
								'mx-auto': fields.alignment === 'center',
								'ml-0 mr-auto': fields.alignment === 'left',
								'mr-0 ml-auto': fields.alignment === 'right',
							}
						)}
						{...ContentfulLivePreview.getProps({
							...contentfulInspectorProps,
							fieldId: 'icon',
						})}
					>
						<XDIcon
							className={`${iconSize} ml-1.5 stroke-1 group-hover:rotate-y-180 ease-in duration-500 transition-transform will-change-transform`}
							id={iconId}
							entry={fields.icon}
						/>
					</div>
				)}
				{fields.title && (
					<h3
						className={cn('mt-12 mb-4', {
							'text-center': fields.alignment === 'center',
							'text-left': fields.alignment === 'left',
							'text-right': fields.alignment === 'right',
						})}
						{...ContentfulLivePreview.getProps({
							...contentfulInspectorProps,
							fieldId: 'title',
						})}
					>
						{fields.title}
					</h3>
				)}
				{fields.description && (
					<p
						className={cn('', {
							'text-center': fields.alignment === 'center',
							'text-left': fields.alignment === 'left',
							'text-right': fields.alignment === 'right',
						})}
						{...ContentfulLivePreview.getProps({
							...contentfulInspectorProps,
							fieldId: 'description',
						})}
					>
						{fields.description}
					</p>
				)}
				{fields.link && (
					<div
						className={cn('flex font-bold mt-4', {
							'justify-center': fields.alignment === 'center',
							'justify-start': fields.alignment === 'left',
							'justify-end': fields.alignment === 'right',
						})}
						{...ContentfulLivePreview.getProps({
							...contentfulInspectorProps,
							fieldId: 'link',
						})}
					>
						<XDLink
							entry={fields.link}
							className={'inline-flex py-2 mr-2'}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
