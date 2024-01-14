import '@styles/globals.css';
import Script from 'next/script';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { catamaran, dosis } from '@lib/fonts/fonts';
import Footer from '@components/Footer';
import Alert from '@components/Alert';

export const metadata: Metadata = {
	title: 'Xtivia Demo',
	description: 'Xtivia Contentful Next.js Demo',
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	const { isEnabled } = draftMode();

	return (
		<html lang='en' className={`${catamaran.variable} ${dosis.variable}`}>
			<body>
                {isEnabled && <Alert />}
				<main
					className={`${isEnabled ? 'draft-mode' : 'no-draft-mode'}`}
				>
					{children}
				</main>
                <Footer />
			</body>
			{isEnabled && <Script src='/live-preview.mjs' />}
		</html>
	);
}
