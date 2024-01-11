import { Catamaran, Dosis } from 'next/font/google';

export const catamaran = Catamaran({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    fallback: ['sans-serif'],
    variable: '--font-catamaran',
});
export const dosis = Dosis({
	weight: ['200', '300', '400', '500', '600', '700'],
	display: 'swap',
    subsets: ['latin'],
    fallback: ['sans-serif'],
    variable: '--font-dosis'
});
