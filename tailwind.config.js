/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:['Syne', 'sans-serif']
      },
      colors:{
        'black':'#292929',
        'beige':'#FBF5F1',
        'blue':'#2F5FC7',
        'yellow':'#FFF26F',
        'green':'#0F7A60',
        'white':'#FFFFFF'
      },
      fontSize:{
        'h1':'72px',
        'h2':'56px',
        'h3':'40px',
        'h4':'24px',
        'h5':'20px',
        'h6':'16px',
        'pl':'24px',
        'pm':'20px',
        'pr':'16px',
        'ps':'16px',
        'pxs':'14px'
      }
    },
  },
  plugins: [],
}