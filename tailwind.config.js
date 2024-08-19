/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'blue1': '#77E4C8',
        'blue2': '#36C2CE',
        'blue3': '#478CCF',
        'blue4': '#4535C1',
        
      },
      
      fontFamily: {
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
        'Beba':['"Bebas Neue"', 'sans-serif'],
        'fjalla': ['Fjalla One', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'istok': ['Istok Web', 'sans-serif'],
        'playfair': ['Playfair Display', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'italiana': ['Italiana', 'sans-serif']
      },
    },
  },
  plugins: [],
}