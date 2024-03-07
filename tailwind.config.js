/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'img': "url('./src/assets/bgimg1.png')" },
      fontFamily: {
        'zcoolkuaile': ['ZCOOL KuaiLe', 'sans-serif'],
      },
      colors: {
        main: {
          'orange': '#EF2C35',
          'red': '#ED0137'

        }
      }
    },
  },
  plugins: [],
}

