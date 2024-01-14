'use client';

import { useEffect, useState } from 'react';
import Container from '@components/Container';
import Link from 'next/link';

export default function Alert() {
	const [isInIFrame, setIsInIFrame] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsInIFrame(window.self !== window.top);
		}
	}, []);

	return (
		<section
			className={
				'sticky top-0 z-[100] bg-accent-7 border-accent-7 text-white'
			}
		>
			<Container>
				<div className='py-2 text-center text-sm'>
					<div className={'h-8'}>
						This is page is{' '}
						{isInIFrame ? 'in Live Preview mode' : 'a preview'}.
						{!isInIFrame && (
							<Link
								className='underline hover:text-cyan duration-200 transition-colors ml-2'
								href={'/api/disable-draft'}
                                prefetch={false}
							>
								Click here to exit.
							</Link>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
}
