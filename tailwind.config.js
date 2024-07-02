/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'background': '#191919',
      'text': '#B3B3B3',
      'light-background': '#262626',
      'lighter-background': '#1c1c1c',
      'primary': '#caff33',
      'primary-container': '#22251b',
    },
    container: {
      center: true,
      padding: '12px',
      screens: {
        'md': '100%',
        'lg': '992',
        'xl': '1280px',
      },
    }
  },
  plugins: [],
};
