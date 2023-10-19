/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],    //the content that applying the process of tailwind
  theme: {
    screens:{
      sm : '375px',
      xl : '1440px'
    },
    extend: {
      colors:{    //custom color
        footerbg : 'hsl(216, 53%, 9%)',
        testimonialsbg : 'hsl(219, 30%, 18%)',
        mainbg : 'hsl(218, 28%, 13%)',
        introbg : 'hsl(217, 28%, 15%)',
        err : 'hsl(0, 100%, 63%)',
        white : 'hsl(0, 0%, 100%)',
        cyan : 'hsl(176, 68%, 64%)',
        blue : 'hsl(198, 60%, 50%)'

      },
      fontFamily:{
        openSans : ['Open Sans', 'sans-serif'],
        raleway : [ 'Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}

