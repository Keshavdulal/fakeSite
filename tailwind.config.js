module.exports = {
  purge: [
    './src/pages/**/*.js',
    './src/pages/**/*.jsx',
    './src/components/**/*.js',
    './src/components/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        screens: {
          DEFAULT: '100%',
        },
      },
      gridTemplateColumns: {
        9: 'repeat(18, minmax(0, 1fr))',
      },

      gridColumn: {
        'span-1': 'span 2 / span 2',
        'span-1.5': 'span 3 / span 3',
        'span-2': 'span 4 / span 4',
        'span-2.5': 'span 5 / span 5',
        'span-3': 'span 6 / span 6',
        'span-3.5': 'span 7 / span 7',
        'span-4': 'span 8 / span 8',
        'span-4.5': 'span 9 / span 9',
        'span-5': 'span 10 / span 10',
        'span-5.5': 'span 11 / span 11',
        'span-6': 'span 12 / span 12',
        'span-6.5': 'span 13 / span 13',
        'span-7': 'span 14 / span 14',
        'span-7.5': 'span 15 / span 15',
        'span-8': 'span 16 / span 16',
        'span-8.5': 'span 17 / span 17',
        'span-9': 'span 18 / span 18',
      },

      gridColumnStart: {
        0.5: '2',
        1: '3',
        1.5: '4',
        2: '5',
        2.5: '6',
        3: '7',
        3.5: '8',
        4: '9',
        4.5: '10',
        5: '11',
        5.5: '12',
        6: '13',
        6.5: '14',
        7: '15',
        7.5: '16',
        8: '17',
        8.5: '18',
        9: '19',
      },

      // must be in decreasing order
      screens: {
        // sm320: '320px',
        // sm375: '375px',
        '4xl': '2250px',
        '3xl': '1920px',
        '2xl': '1540px',
        sm425: { max: '425px' }, // max-width breakpoint
        sm375: { max: '375px' }, // max-width breakpoint
        sm320: { max: '320px' }, // max-width breakpoint
      },

      // By default the spacing scale is inherited by the
      // padding, margin, width, height, maxHeight, gap, inset, space, and translate core plugins.
      spacing: {
        // 1: '0.1rem',
        // 2: '0.2rem',
      },

      // custom color pallete imported from tailwind.scss
      colors: {
        primary: {
          DEFAULT: 'var(--primary)', // steel-blue
          light: 'var(--primary-light)', // light-steel-blue
        },
        secondary: 'var(--secondary)', // white
        background: 'var(--background)', // light-gray
        image: 'var(--image)', // light-gray 2
      },
    },
    fontFamily: {
      // sans: '"Good Sans","ABC Monument Grotesk"',
      // monumentGrotesk: 'ABC Monument Grotesk', // for headings that use Good Sans by default
    },
  },
  // plugins: [require('@tailwindcss/aspect-ratio')],
  mode: 'jit', // experimental beta feature
}
