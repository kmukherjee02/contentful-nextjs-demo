import { useState } from 'react';
import cn from 'classnames';
import Link from "next/link";

interface IButtonAnimatedProps {
	entry: Record<string, any>;
}

const ButtonAnimated = ({entry}: IButtonAnimatedProps) =>  {
	const href= entry?.href ? entry.href : ``;
	const [isHovered, setIsHovered] = useState<boolean>(false);
    const [mousePositionEnter, setMousePositionEnter] = useState<Record<string, any>>({});
	const [mousePositionLeave, setMousePositionLeave] = useState<Record<string, any>>({});
    

	const findMousePosition = (e: React.MouseEvent<HTMLElement>) : Record<string, string> => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		return { top: `${y}px`, left: `${x}px` };
	};
	const handleMouseEnter = (e:React.MouseEvent<HTMLElement>) : void => {
		setIsHovered(true);
		const currentButton = e.target as HTMLElement;
		currentButton.querySelector('span.btn-fill')?.removeAttribute('style');
        setMousePositionEnter(findMousePosition(e));
	};
	const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) : void => {
		setIsHovered(false);
        setMousePositionLeave(findMousePosition(e))
	};
    const handleAnimation = () : Record<string, string> => {
        if (entry.theme === 'primary' || entry.theme === 'secondary') {
            return isHovered ?  mousePositionEnter : mousePositionLeave
        }
    }

   
	return (
		<div className={cn('', {'text-center':  entry.theme ==='primary' || entry.theme ==='secondary'})}>
			<Link href={href} passHref> 
				<a
					className={cn('inline-flex py-4 px-8 m-1 text-base font-medium rounded relative z-10 overflow-hidden shadow-lg cursor-pointer', {
						'bg-primary-normal text-white': entry.theme ==='primary',
						'bg-white text-primary-normal hover:text-white transition-colors duration-400': entry.theme === 'secondary',
						'px-3 font-semibold hover:text-white border-l-2 border-primary-normal w-full': entry.theme === 'tertiary'
					})}
					onMouseEnter={(e) => handleMouseEnter(e)}
					onMouseLeave={(e) => handleMouseLeave(e)}
				>
					{entry.buttonText ? entry.buttonText : entry.label}
		
					<span
						className={cn(`${isHovered ? `w-[225%] h-[562.5px] `:`w-0`} btn-fill absolute -z-10 transition-{height width}`, {
							[`${!isHovered && 'h-0'} bg-primary-hover rounded-[30px] -translate-x-1/2 -translate-y-1/2 duration-500 ease-in-out `]: entry.theme === 'primary' || entry.theme === 'secondary',
							[`${!isHovered && 'h-full'} bg-primary-normal top-0 left-0 duration-700`]: entry.theme === 'tertiary'
						})}
						style={handleAnimation()}
					/>
				</a>
			</Link>
		</div>
	);
};

export default ButtonAnimated;