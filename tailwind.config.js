/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:{
        "xs": "200px"
      },
      colors:{
        'baseColor': "#080d1ffe"
      }
    },
    fontFamily:{
      'Lora': ['Lora', 'sans']
    },
  },
  plugins: [],
}

