import { useState } from 'react';
import Link from 'next/link';
import { isTypeXdLink } from 'types/contentful';
import { ButtonAnimatedProps } from 'types';
import cn from 'classnames';

const ButtonAnimated = ({ entry }: ButtonAnimatedProps) => {
	// type check since props are of union type
	const typeIsLink = isTypeXdLink(entry);

	const href = typeIsLink ? entry.fields.href as string : '';
	const theme = entry.fields.theme;

	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [mousePositionEnter, setMousePositionEnter] = useState<
		Record<string, any>
	>({});
	const [mousePositionLeave, setMousePositionLeave] = useState<
		Record<string, any>
	>({});

	const findMousePosition = (
		e: React.MouseEvent<HTMLElement>
	): Record<string, string> => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		return { top: `${y}px`, left: `${x}px` };
	};
	const handleMouseEnter = (e: React.MouseEvent<HTMLElement>): void => {
		setIsHovered(true);
		const currentButton = e.target as HTMLElement;
		currentButton.querySelector('span.btn-fill')?.removeAttribute('style');
		setMousePositionEnter(findMousePosition(e));
	};
	const handleMouseLeave = (e: React.MouseEvent<HTMLElement>): void => {
		setIsHovered(false);
		setMousePositionLeave(findMousePosition(e));
	};
	const handleAnimation = () => {
		if (theme === 'primary' || theme === 'secondary') {
			return isHovered ? mousePositionEnter : mousePositionLeave;
		}
	};

	return (
		<div
			className={cn('', {
				'text-center': theme === 'primary' || theme === 'secondary',
			})}
		>
			<Link
				href={href}
				className={cn(
					'inline-flex py-4 px-8 m-1 text-base font-medium rounded relative z-10 overflow-hidden shadow-lg cursor-pointer',
					{
						'bg-primary-normal text-white': theme === 'primary',
						'bg-white text-primary-normal hover:text-white transition-colors duration-400':
							theme === 'secondary',
						'px-3 font-semibold hover:text-white border-l-2 border-primary-normal w-full':
							theme === 'tertiary',
					}
				)}
				onMouseEnter={(e) => handleMouseEnter(e)}
				onMouseLeave={(e) => handleMouseLeave(e)}
			>
				{typeIsLink ? entry.fields.label : entry.fields.buttonText}

				<span
					className={cn(
						`${
							isHovered ? `w-[225%] h-[562.5px] ` : `w-0`
						} btn-fill absolute -z-10 transition-{height width}`,
						{
							[`${
								!isHovered && 'h-0'
							} bg-primary-hover rounded-[30px] -translate-x-1/2 -translate-y-1/2 duration-500 ease-in-out `]:
								theme === 'primary' || theme === 'secondary',
							[`${
								!isHovered && 'h-full'
							} bg-primary-normal top-0 left-0 duration-700`]:
								theme === 'tertiary',
						}
					)}
					style={handleAnimation()}
				/>
			</Link>
		</div>
	);
};

export default ButtonAnimated;
