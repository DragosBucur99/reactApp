/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    extend: {
      fontFamily: {
        poppins: 'Poppins',
      },
      colors: {
        'cardColor': '#1d1d1d',
        'expendedMenuBackground': 'rgba( 20, 17, 21, 0.5 )' 
      }
    },
  },
  plugins: [],
}
