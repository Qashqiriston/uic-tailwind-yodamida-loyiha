 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        sm: '480px',
        md: '768px',
        lg: '1024px'
      },
      colors:{
        primaryColor: '#010a5e',
        primaryColorLight: '#010d78',
        secondaryColor: '#ffcc00',
        paragraphColor: '#c0c0c0',
        whiteColor: '#fff',
        blackColor: '#000',
        greenColor: '#007936',
        redColor: '#cc3334',
        darkColorLight: '#171717',
      },
      keyframes:{
        move: {
          "50%": {transform: 'translateY(-1rem)'} 
        },
      },
      animation:{
          'movingY': 'move 2s linear infinite' 
      },
      container:{
        center: true,
        padding:{
          Default: '1rem',
          sm: '1.5rem'
        }
      }
    },    
  },
  plugins: [],
}

