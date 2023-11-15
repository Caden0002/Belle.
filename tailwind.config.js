/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '1024px',
        'lg': '1280px',
        'xl': '1900px',
      },

      fontFamily: {
        Signikta: ['Signikta', 'sans-serif'],
      },


      colors: {
        // Define your color variables here
        textColorPrimary: '#000000', // Change this to your desired color
        textColorSecondary: '#ffffff',
        textColorTertiary: '#969696',


        backgroundColorPrimary: '#ffffff',
        backgroundColorSecondary: '#000000',
        backgroundColorTertiary: '#413333',
        // backgroundColorQuaternary: '#F6F6EB',
      },

    },
  },
  plugins: [],
};
