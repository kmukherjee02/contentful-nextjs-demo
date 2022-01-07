const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }) {
	addUtilities({
		'.rotate-y-180': {
			transform: 'rotateY(180deg)',
		},
	})
});

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	plugins: [rotateY],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				md: '1rem',
				lg: '.5rem',
				xl: '3.5rem',
				'2xl': '10rem'
			},
		},
		extend: {
			animation: {
				'bounce-low': 'bounce 3s linear infinite',
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
				'img-w-txt': '-1px 3px 20px 0px rgba(82, 90, 101, 0.10)',
				'mobile-header': '0 5px 40px 0 rgba(0, 0, 0, .11)'
			},
			colors: {
				'primary-normal': '#7b68ee',
				'primary-hover': '#3e57d0',
				'primary-dark': '#0b0b31',
				'secondary-normal': '#FFFFFF',
				'secondary-hover': '#7b68ee',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				'hero-bg-100': '#2dbcdc',
				'hero-bg-200': '#0095ce',
				'hero-bg-300': '#006dba',
				'hero-bg-400': '#00429b',
				'hero-bg-500': '#370b6f',
				success: '#0070f3',
				cyan: '#79FFE1',
				orange: '#ff561d',
				'orange-light': '#FF9800',
			},
			fontFamily: {
				'sans': ['Catamaran', 'sans-serif'],
				'dosis': ['Dosis', 'sans-serif']
			},
			fontSize: {
				'sm': ['.94rem', '1.6rem'],
				'4xl': ['2.3rem', '3.25rem'], 
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			spacing: {
				28: '7rem',
			},
			strokeWidth: {
				'1': '0.9px',
			},
			transitionProperty: {
				'height': 'height',
				'width': 'width'
			},
		},
	},
	variants: {
		extend: {
			display: ["group-hover"],
		},
	}
}
