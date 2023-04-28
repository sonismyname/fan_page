/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-100": "#FFFFFF",
        "main-200": "#CED9D9",
        "main-300": "#C0D8D8",
        "main-400": "#FE6032",
        "main-500": "#1B9AF9",
        "main-600": "#5bb6f7"
      },
      keyframes: {
        "slide-right": {
          "0%": {
            "-webkit-transform": " translateX(-500px);",
            transform: "translateX(-500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
        "slide-left": {
          "0%": {
            "-webkit-transform": " translateX(0);",
            transform: "translateX(0);",
          },
          "100%": {
            "-webkit-transform": "translateX(1300px);",
            transform: "translateX(1300px);",
          },
        },
        "slide-left2": {
          "0%": {
            "-webkit-transform": " translateX(500px);",
            transform: "translateX(500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
        spin: {
          to: {
            transform: "rotate(360deg);",
          },
        },
      },
      animation: {
        "slide-right":
          "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "slide-left":
          "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "slide-left2":
          "slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        loader: "spin 1s infinite;",
      },
      html: {
        overflowX: "hidden",
        overflowY: "hidden",
      },
      body: {
        overflowX: "hidden",
        overflowY: "hidden",
      },
    },
  },
  plugins: [],
};
