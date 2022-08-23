module.exports = {
  prefix: '',
  important: true,
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'mliquidedia' or 'class'
  theme: {
    namedGroups: ['one', 'two'],
    extend: {
      colors: {
        sale: '#dc9d2d',
      },
      fontFamily: {
        body: ['var(--main-family)'],
        heading: ['var(--heading-family)'],
        button: ['var(--font-button)'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animatecss')({
      classes: [
        'animate__animated',
        'animate__fadeIn',
        'animate__fadeInDown',
        'animate__fadeInUp',
        'animate__bounceIn',
      ],
      settings: {
        animatedSpeed: 500,
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#f90',
          'primary-focus': '#cc7a00',
          secondary: '#50a7d3',
          'secondary-focus': '#50a7d3',
          accent: '#dd82be',
          neutral: '#9ca3af',
          'base-100': '#ffffff',
          info: '#40AAD4',
          success: '#186846',
          warning: '#D1A710',
          error: '#EA668A',
        },
      },
    ],
  },
}
