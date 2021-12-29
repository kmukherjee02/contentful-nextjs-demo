import { useState } from 'react';
import cn from 'classnames';

export default function AnimatedButton({entry}) {
	const [isHovered, setIsHovered] = useState(false);
    const [mousePositionEnter, setMousePositionEnter] = useState({});
	const [mousePositionLeave, setMousePositionLeave] = useState({});
    

	const findMousePosition = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		return { top: `${y}px`, left: `${x}px` };
	};
	const handleMouseEnter = (e) => {
		setIsHovered(true);
		e.target.querySelector('span.btn-fill').removeAttribute('style');
        setMousePositionEnter(findMousePosition(e))
	};
	const handleMouseLeave = (e) => {
		setIsHovered(false);
        setMousePositionLeave(findMousePosition(e))
	};
    const handleAnimation = () => {
        if (entry.theme === 'primary' || entry.theme === 'secondary') {
            return isHovered ?  mousePositionEnter : mousePositionLeave
        }
    }

   
	return (
		<a
			className={cn('inline-flex py-3 px-8 mr-2 text-base font-medium rounded relative z-10 overflow-hidden shadow-lg cursor-pointer', {
                'bg-primary-normal text-white': entry.theme =='primary',
                'bg-white text-primary-normal hover:text-white transition-colors duration-400': entry.theme === 'secondary',
                'hover:text-white border-l-2 border-primary-normal': entry.theme === 'tertiary'
            })}
			onMouseEnter={(e) => handleMouseEnter(e)}
			onMouseLeave={(e) => handleMouseLeave(e)}
		>
			{entry.name ? entry.name : entry.label}

			<span
				className={cn(`${isHovered ? `w-[225%] h-[562.5px] `:`w-0`} btn-fill absolute -z-10 transition-{height width}`, {
                    [`${!isHovered && 'h-0'} bg-primary-hover rounded-[30px] -translate-x-1/2 -translate-y-1/2 duration-500 ease-in-out `]: entry.theme === 'primary' || entry.theme === 'secondary',
                    [`${!isHovered && 'h-full'} bg-primary-normal top-0 left-0 duration-700`]: entry.theme === 'tertiary'
                })}
				style={handleAnimation()}
			 />
		</a>
	);
};
