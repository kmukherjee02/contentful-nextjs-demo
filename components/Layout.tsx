import Alert from '@components/Alert';
import Footer from '@components/Footer';
import Meta from '@components/Meta';
import { LayoutProps } from 'types';

export default function Layout({ children, draftMode }: LayoutProps) {
	return (
		<>
			<Meta />
			<div className='min-h-screen'>
				<main
					className={`${draftMode ? 'draft-mode' : 'no-draft-mode'}`}
				>
					{draftMode && <Alert />}
					{children}
				</main>
			</div>
			<Footer />
		</>
	);
}
