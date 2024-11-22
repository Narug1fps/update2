/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-mary': "url('/bg-mary-pc.png')",
        'mary-md': "url('/mary-md.png')",
        'gif-404':"url(../public/funny-404-error-page-design.gif)"
      },
      borderColor:{
        'discord': '	#7289da',
      }
      
    },
  },
  plugins: [],
};
