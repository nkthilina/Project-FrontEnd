/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: '#6B3CC9',
        SecondaryColor: '#F28D35',
        AnalogousColor01: '#6A44F2',  
        AnalogousColor02: '#1CBDDD',
        TriadicColor01: '#52378C',
        DarkColor01: '#78BF91',
        DarkColor02: '#4DCA79',
        TextColor: '#2F2F2F',
        TextColorLight: '#545A75',
        TextColorSubtle: '#9C9991',
        AccentColor01: '#E2F2FE',
        AccentColor02: '#FFF8E0',
        ErrorColor: '#FF0335',
        SuccessColor: '#5EB30B',
        AccordionExpand: '#6F6C90',
        AccordionBg: '#FAF8FF'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
      },
    },
  plugins: [],
}

