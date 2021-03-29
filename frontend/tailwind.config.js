module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
            a: {
              color: theme("colors.red.500"),
              "text-decoration": "none",
              "&:hover, &.active": {
                color: "white",
                "background-color": theme("colors.red.500"),
              },
            },
            strong: {
              color: theme("colors.red.500"),
            },
            h1: {
              color: "white",
              "margin-top": "0",
            },
            h2: {
              color: "white",
              "margin-top": "0",
            },
            h3: {
              color: "white",
              "margin-top": "0",
            },
            h4: {
              color: "white",
              "margin-top": "0",
            },
            code: {
              color: theme("colors.grey.800"),
              "background-color": "white",
              "&:before, &:after": {
                display: "none",
              },
            },
            p: {
              color: "white",
              "margin-top": "0",
              "margin-bottom": "1em",
            },
            img: {
              "margin-top": "0",
              "margin-bottom": "0",
              "box-shadow": "0px 2px 4px -2px rgba(255, 255, 255, 30%)",
            },
            "ul > li": {
              "&::before": {
                "background-color": "white",
                "font-weight": "bold",
              },
            },
            "ol > li": {
              "&::before": {
                color: "white",
                "font-weight": "bold",
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [require("@tailwindcss/typography")],
};