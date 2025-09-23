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
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.5)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.5)',
        'neon-yellow': '0 0 20px rgba(250, 204, 21, 0.5)',
        'neon-green': '0 0 20px rgba(74, 222, 128, 0.5)',
        'neon-orange': '0 0 20px rgba(249, 115, 22, 0.5)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
};
export default config;
