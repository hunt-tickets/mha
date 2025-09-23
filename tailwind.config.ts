import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        primary: {
          green: "#00ff00", // Hero banner green placeholder
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '375px',
      }
    },
  },
  plugins: [],
};
export default config;
