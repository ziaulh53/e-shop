/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./node_modules/flowbite/**/*.js",
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme-color': "#243c5a",
        'theme-light': "#28476d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
