/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        bitcount: ['"Bitcount Grid Double"', 'monospace'],
        offSide: ['"Offside"', 'monospace'],
      },
      keyframes:{
        orbit:{
          '0%':{boxShadow:"40px -40px 90px -42px white"},
          '25%':{boxShadow:"40px 40px 90px -42px white"},
          '50%':{boxShadow:"-40px 40px 90px -42px white"},
          '75%':{boxShadow:"-40px -40px 90px -42px white"},
          '100%':{boxShadow:"40px -40px 90px -42px white"},
        },
        
      },
      animation:{
        orbit:'orbit 5s linear infinite'
      }
    },
  },
  plugins: [],
}