import '@styles/globals.css';
import Script from 'next/script';
import { Metadata, Viewport } from 'next';
import { draftMode } from 'next/headers';
import { catamaran, dosis } from '@lib/fonts/fonts';
import Footer from '@components/Footer';
import { GA_TRACKING_ID } from '@lib/analytics';
import { BASE_URL, CMS_NAME } from '@lib/utilities/constants';

export const viewport: Viewport = {
    themeColor: '#000',
}

export const metadata: Metadata = {
	title: `Xtivia Next.js & ${CMS_NAME} Demo`,
	description: `A statically generated site demonstrating the power of Next.js and ${CMS_NAME}`,
    metadataBase: new URL(`${BASE_URL}`),
    icons: {
        icon: '/favicon.ico',
        shortcut: '/icon.jpg',
    },
    openGraph: {
        siteName: 'Xtivia Next.js & Contentful Demo',
        images: [
            {
                url: `${BASE_URL}/opengraph-image.png`,
                width: 400,
                height: 300,
                alt: 'Xtivia: We make it better.',
            },
        ],
    },
    robots: {
        index: false,
    }
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isEnabled } = draftMode();

	return (
		<html lang='en' className={`${catamaran.variable} ${dosis.variable}`}>
			<body>
				<main
					className={`${isEnabled ? 'draft-mode' : 'no-draft-mode'}`}
				>
					{children}
				</main>
                <Footer />
			</body>
			{isEnabled && <Script src='/live-preview.mjs' />}
            <Script
				id='google-analytics-4'
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
			/>
			<Script
				async
				id='ga-4'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                        page: window.location.pathname
                    });`,
				}}
			/>
			<Script
				async
				id='provo-source'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `(function(o,i){window.provesrc&&window.console&&console.error&&console.error("ProveSource is included twice in this page."),provesrc=window.provesrc={dq:[],display:function(){this.dq.push(arguments)}},o._provesrcAsyncInit=function(){provesrc.init({apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MWU0ZWY2NWI5Mzk5ZTJmZDYyNjk5NDgiLCJpYXQiOjE2NDIzOTM0NDV9.GGaVenpF3XZ4XbAj4tAQ17fcAcqD62qmgz7FD4MK0xE",v:"0.0.4"})};var r=i.createElement("script");r.type="text/javascript",r.async=!0,r["ch"+"ar"+"set"]="UTF-8",r.src="https://cdn.provesrc.com/provesrc.js";var e=i.getElementsByTagName("script")[0];e.parentNode.insertBefore(r,e)}(window,document));`,
				}}
			/>
			<Script
				async
				id='hot-jar'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:2774718,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
				}}
			/>
			<Script
				id='popup-maker'
				strategy='lazyOnload'
				async
				src='https://apiv2.popupsmart.com/api/Bundle/377842'
			/>
		</html>
	);
}
