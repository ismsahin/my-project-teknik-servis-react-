/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ferrari_red: '#ff2800',
        dark_mode: '#3d3d3d',
        sky: '##87CEEB',
        cyan: '#00E0D4',
        white: '#EAEFF2',
        red_orange: '#FF4500',
        
        

      },
      backgroundImage: {
        
       },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


