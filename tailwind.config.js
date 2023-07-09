/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'bh-gray': {
        100: '#E1E1E1',
        200: '#546A7B',
        300: '#F5F5F5',
        400: '#8FB1CB',
        500: '#CECBCB',
        600: '#708DA4',
      },
      'bh-blue': {
        100: '#258EA6',
        200: '#2C2C2C',
        300: '#ADDAF7',
        400: '#3F8EFC',
      },
      'bh-yellow': {
        100: '#FFBD59',
        200: '#FFD391'
      },
      'bh-brown': '#804D00',
      'bh-black': '#0D1F2D',
      'bh-green': {
        100: '#73BA9A',
        200: '#5B9279',
        300: '#BCD63A',
        400: '#D6EB71',
      },
    }
  },
  plugins: [],
}
