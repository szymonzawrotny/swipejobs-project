/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#31374d',
      },
      screens: {
        ssm: "380px",
        sm: '640px',
        md: '768px',
        lg: '1000px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
