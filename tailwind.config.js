const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }) {
	addUtilities({
		'.rotate-y-180': {
			transform: 'rotateY(180deg)',
		},
	})
});

const typography = plugin(function ({ addUtilities, theme }) {
	addUtilities({
		'.section-title': {
			'font-family': theme('fontFamily.dosis'),
			color: theme('colors.primary-dark'),
			'font-size': '38px',
			'line-height': 1.4,
			'font-weight': 800,
		},
		'.section-subtitle': {
			'font-size': '16px',
			'font-weight': 700,
			'letter-spacing': '0.5px',
			'line-height': 1.4,
			'text-transform': 'uppercase',
		}
	})
});


module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
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
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
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
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
				'img-w-txt': '-1px 3px 20px 0px rgba(82, 90, 101, 0.10)'
			},
			animation: {
				'bounce-low': 'bounce 3s linear infinite',
			},
			transitionProperty: {
				'height': 'height',
				'width': 'width'
			},
			strokeWidth: {
				'1': '0.9px',
			},
		},
	},
	plugins: [rotateY, typography],
}
