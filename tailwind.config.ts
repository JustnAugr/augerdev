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
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 20%': {
              transform: 'translateY(0%)',
          },
          '25%, 45%': {
              transform: 'translateY(-20%)',
          },
          '50%, 70%': {
              transform: 'translateY(-40%)',
          },
          '75%, 95%': {
              transform: 'translateY(-60%)',
          },                            
          '100%': {
              transform: 'translateY(-80%)',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
