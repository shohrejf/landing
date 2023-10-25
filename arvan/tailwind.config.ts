/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/arvan/assets/headerBg.svg')",
        "custom-gradient":
          "linear-gradient(260deg, #00BABA -6.71%, #002437 161.27%)",
      },
      fontSize: {
        "title-40": [
          "40px",
          {
            lineHeight: "56px",
            fontWeight: "700",
          },
        ],
        "title-38": [
          "38px",
          {
            lineHeight: "38px",
            fontWeight: "700",
          },
        ],
        "title-32": [
          "32px",
          {
            lineHeight: "38px",
            fontWeight: "600",
          },
        ],
        "title-28": [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "700",
          },
        ],
      },
      fontFamily: {
        yekanBakh: ["Yekan Bakh"],
      },
      colors: {
        ["customGreen"]: {
          900: "#005B5B",
          800: "#007070",
          700: "#008C8C",
          600: "#00A7A7",
          400: "#40CDCD",
        },
        ["customRedd"]: {
          500: "#EE5353",
        },
        ["customGray"]: {
          900: "#253343",
          800: "#344456",
          600: "#566E88",
          500: "#647E9A",
          300: "#91A4BC",
          100: "#F3FCFC",
        },
        ["customBlue"]: {
          600: "#002437",
          500: "#00BABA",
          100: "#D1DBE8",
        },
      },
      boxShadow: {
        customShadow: "0px 4px 8px 0px rgba(122, 144, 170, 0.16)",
      },
    },
  },
  plugins: [],
};
