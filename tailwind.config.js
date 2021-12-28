const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        //sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        'text': ['Glacial', 'sans-serif'],
        'header': ['Riffic', 'sans-serif'],
      },
      colors: {
        rose: colors.rose,
        cahoot: {
          "blue-dark": "#13284E",
          "blue-med": "#2F99C9",
          "blue-light": "#41C5E5",
          white: "#F8F8F8",
          "gray-dark": "#999999",
          "gray-med": "#D2D2D2",
          orange: "#F89B4D",
          "red-med": "#EF4866",
          "red-dark": "#CC2753",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
