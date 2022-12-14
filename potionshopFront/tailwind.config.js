/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    
  ],
  theme: {

    extend: {},
    fontFamily:{
      'display':['Aclonica'],
      'scary':['"henny penny"']
    }
  },
  plugins:  [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["halloween"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  
  
}