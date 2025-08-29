/** @type {import('tailwindcss').config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme : {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradiant(var(--tw-gradient-stop))',
        'gradiant-conic': 'conic-gradiant(from 180deg at 50% 50%, var(--tw-gradient-stop))',

      },
    },
  },
  plugins: [],
  darkMode : 'class'
}