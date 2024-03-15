import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mobile: "320px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1600px",
      },
      colors: {
        // custom theme colors
        main: {
          green: {
            dark: "hsl(var(--main-green-dark))",
          },
          grey: {
            dark: "hsl(var(--main-grey-dark))",
            middle: "hsl(var(--main-grey-middle))",
            light: "hsl(var(--main-grey-light))",
          },
          white: "hsl(var(--main-white))",
        },
        accent: {
          orange: {
            middle: "hsl(var(--accent-orange-middle))",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
