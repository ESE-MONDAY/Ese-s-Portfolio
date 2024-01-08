/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
          'roboto': ['Roboto', 'sans-serif'],
          'Courgette': ['Courgette', 'sans-serif'],
          "gallient": ["Gallient"],
      },
      colors:{
        'violet-red': {
          '50': '#fdf2f7',
          '100': '#fce7f1',
          '200': '#fad0e3',
          '300': '#f8a9cb',
          '400': '#f274a8',
          '500': '#ea4c89',
          '600': '#d92964',
          '700': '#bc1a4c',
          '800': '#9b193f',
          '900': '#821938',
          '950': '#4f081c',
      },
      
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}