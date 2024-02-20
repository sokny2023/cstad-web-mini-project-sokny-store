/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color' : '#18A4E4',
        'secondary-color' : '#F43F5E',
        'accent-color' : '#F97316',
        'on-primary': '#FFFFFF',
        'on-secondary': '#FFFFFF',
        'primary-hover': '#1488BC',
        'secondary-hover': '#D51D45',
        'bb' : '#CAEFFF'
      },
      margin: {
        'custom-1': '10px', 
        'custom-2': '20px',
        'custom-3': '40px',
        'custom-4': '50px',
        'custom-5': '60px',
      },
      /*container: {
        center: true,
        screens: {
          sm: '620px',
          md: '768px', 
          lg: '990px', 
          xl: '1220px', 
          '2xl': '1536px', 
        },
      },*/
    },
  },
  plugins: [require('flowbite/plugin')],
}