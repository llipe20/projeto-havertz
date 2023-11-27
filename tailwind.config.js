/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        palete : {
          100 : '#2219BB',
          200 : '#170F96',
          300 : '#10097C',
          400 : '#0A0562',
          500 : '#050241'
        }
      },
      spacing : {
        '85' : '340px'
      }
    },
  },
  plugins: [],
}

