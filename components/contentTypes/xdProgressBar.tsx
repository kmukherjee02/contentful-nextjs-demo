import { useRef, useState } from 'react';
import { useOnScreen } from '@lib/hooks/hooks'

interface IXDProgressBarProps {
	entry: Record<string, any>;
}

const XDProgressBar = ({ entry }: IXDProgressBarProps) => {
	const divRef = useRef<HTMLDivElement | null>(null);
	const isVisible = useOnScreen(divRef);

	return (
		<div ref={divRef} className='w-full mb-4'>
			<h6 className='font-semibold text-primary-normal'>
				{entry.title}
				<span className='float-right'>
					{entry.progressAmount}
					{entry.progressUnit}
				</span>
			</h6>
			<div className='h-[5px] bg-[#f1f1fa] relative'>
				<div 
                className='bg-primary-normal h-full absolute top-0 left-0 transition-all duration-[1500ms]' 
                style={isVisible ?  {width: `${entry.progressAmount}%`} : {width: '10%'}} />
			</div>
		</div>
	);
}

export default XDProgressBar;