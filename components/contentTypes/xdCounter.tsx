import { useEffect, useRef, useState } from 'react';
import { setInterval } from 'timers/promises';
import { useOnScreen } from '../../lib/hooks/hooks'

interface IXDCounterProps {
	entry: Record<string, any>;
}

const  XDCounter= ({entry}: IXDCounterProps) => {
    const { description, quantity, suffix } = entry.fields;
    const [count, setCount] = useState(0);
    const [countRan, setCountRan] = useState(false);
    const divRef = useRef<HTMLDivElement | null>(null);
	const isVisible = useOnScreen(divRef);


    useEffect(() => {
        if(isVisible && !countRan) {
            setCountRan(true)
            let start = 0;
            if (start === quantity) return;
            let incrementTime = (2 / quantity) * 1000;
            let counter = window.setInterval(() => {
                start++;
                setCount((prev) => prev + 1);
                if (start >= quantity){window.clearInterval(counter) }
            }, incrementTime);
        } 
    }, [isVisible]);

    return (
        <div className='my-4' ref={divRef}>
            <div>
                <h2 className='text-white text-6xl'>
                    <span>
                        {count}
                    </span>
                    <span>
                        {suffix}
                    </span>
                </h2>
            </div>
            <div>
                <h3 className='text-white'>
                    {description}
                </h3>
            </div>
        </div>
    );
}
 
export default XDCounter;