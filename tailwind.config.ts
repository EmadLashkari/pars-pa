import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-main-color": "#FFFFFF",
        "bg-sec-color": "#CEEFF8",
        "black-bold": "#292929",
        "gray-thin": "#424242",
        "text-white-color": "#FFFFFF",
        primary100: "#FAFAFA",
        primary200: "#E3F3F3",
        primary300: "#CBECED",
        primary400: "#B4E5E6",
        primary500: "#9DDEDF",
        primary600: "#85D8D9",
        primary700: "#6ED1D2",
        primary800: "#57CACB",
        primary900: "#3FC3C5",
        primary950: "#28BCBE",
        white: "#FFFFFF",
        gray1: "#F9F9F9",
        gray2: "#E1E1E1",
        gray3: "#EDEDED",
        gray4: "#CBCBCB",
        gray5: "#ADADAD",
        gray6: "#757575",
        gray7: "#717171",
        gray8: "#353535",
        black: "#0C0C0C",
        title: "#4A4747",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
