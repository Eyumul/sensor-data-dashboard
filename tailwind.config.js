/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    safelist: [
      {
        pattern: /text-(orange|blue|violet|red)-(1|2)/,
      },
      {
        pattern: /bg-(orange|blue|violet|red)-(1|2)/,
      },
    ],
    theme: {
      screens: {
        'xs': '482px',
        'sm': '640px',
        'md': '768px',
        'lg': '1080px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      extend: {
        // fontFamily: {
        //   headerFont: ['Poppins'],
        //   bodyFont: ['Source Sans 3']
        // },
        // fontSize: {
        //   'h1': '48px',
        //   'h2': '36px',
        //   'h3': '20px',
        //   'b1': '18px',
        //   'b2': '16px',
        //   'b3': '14px',
        //   'b4': '12px'
        // },
        colors: {
          background: '#F8F9FC',
          violet: {
            '1' : '#551FFF',
            '2' : '#F3F0FF'
          },
          blue: {
            '1' : '#00B7FE',
            '2' : '#EAF9FF'
          },
          orange: {
            '1' : '#FF6A00',
            '2' : '#FFF2E9'
          },
          red: {
            '1' : '#FD2254',
            '2' : '#FFEBEF'
          },
        }
      },
    },
    plugins: [],
  }
  
  