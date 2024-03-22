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
        purple: '#7b01f7',
        lavender: '#ebb1fd',
        indigoC: '#252436',
        grayC: '#f4f4f4'
      },
      maxWidth: {
        small: '850px',
        big: '1540px'
      },
      fontSize: {
        '3xl': '2rem',
        '4xl': '3rem',
        '5xl': '4rem',
        '6xl': '5rem',
        '7xl': '6rem',
      }
    }
  },
  plugins: [],
};
export default config;
