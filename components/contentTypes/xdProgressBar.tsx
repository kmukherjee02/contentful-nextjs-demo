'use client';

import { useRef } from 'react';
import { useOnScreen } from '@lib/hooks/hooks'
import { XDProgressBarProps } from 'types';

const XDProgressBar = ({ entry }: XDProgressBarProps) => {
    const { fields } = entry;
    
	const divRef = useRef<HTMLDivElement | null>(null);
	const isVisible = useOnScreen(divRef);

	return (
		<div ref={divRef} className='w-full mb-4'>
			<h6 className='font-semibold text-primary-normal'>
				{fields.title}
				<span className='float-right'>
					{fields.progressAmount}
					{fields.progressUnit}
				</span>
			</h6>
			<div className='h-[5px] bg-[#f1f1fa] relative'>
				<div 
                className='bg-primary-normal h-full absolute top-0 left-0 transition-all duration-[1500ms]' 
                style={isVisible ?  {width: `${fields.progressAmount}%`} : {width: '10%'}} />
			</div>
		</div>
	);
}

export default XDProgressBar;