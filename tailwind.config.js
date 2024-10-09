/** @type {import('tailwindcss').Config} */
const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: {
    DEFAULT: "#000",
    100: "#333333",
  },
  white: {
    DEFAULT: "#fff",
    800: " #FFFFFFCC",
    100: "#DDDDDD",
  },
  green: {
    DEFAULT: "#1F8743",
    200: "#1F8743CC",
    100: "#7CDC9E",
    300: "#F6EDE6B2",
  },
  sand: {
    DEFAULT: "#F6EDE6",
    100: "#F6EDE61A",
    200: "#F6EDE6",
  },
  gray: {
    DEFAULT: "#666",
    100: "#999",
    200: "#ddd",
    300: "#ccc",
    400: "#666",
    500: "#333",
  },
  yellow: {
    DEFAULT: "#DCD27C",
  },
  orange: {
    DEFAULT: "#DCAF7C",
  },
  blue: {
    DEFAULT: "#7CC7DC",
  },
};

module.exports = {
  content: ["./**/*.{php,js,html}", "!./node_modules,*"],
  theme: {  
    extend: {
      screens: {
        xsm: "450px",
        sm: "640px",
        md: "768px",
        xmd: "860px",
        xlg: "991px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        custom: " 3px 3px 30px 0px #00000026",
      },
      backgroundImage: {
        customGradient:
          "linear-gradient(73.31deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%)",
      },
      fontFamily: {
        sans: ["BundesSans Office"],
      },
      colors: {
        ...colors,
      },
      fontSize: {
        h1: ["64px", { lineHeight: "74px", fontWeight: "700" }],
        h2: ["48px", { lineHeight: "57.6px", fontWeight: "700" }],
        h3: ["32px", { lineHeight: "42px", fontWeight: "700" }],
        h4: ["28px", { lineHeight: "38px", fontWeight: "700" }],
        h5: ["24px", { lineHeight: "34px", fontWeight: "700" }],
        h6: ["22px", { lineHeight: "32px", fontWeight: "700" }],
        p: ["20px", { lineHeight: "30px", fontWeight: "400" }],
        a: ["18px", { lineHeight: "22px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "20px", fontWeight: "400" }],
        tag: ["14px", { lineHeight: "16.8px", fontWeight: "400" }],
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1372px",
      },
    },
  },
  plugins: [],
};
