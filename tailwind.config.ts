import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        "login-img": "url('/assest/images/rectangle.svg')",
      },
      colors: {
        "light-gray": "hsl(var(--light-gray))",
        "light-gray-high-opecity": "hsl(var(--light-gray-high-opecity))",
        "input-focus-color": "hsl(var(--input-focus-color))",
        "light-slate": "hsl(var(--light-slate))",
        secondary: "hsl(var(--secondary))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        "background-header": "hsl(var(--background-header))",
        destructive: "hsl(var(--destructive))",
      },
    },
  },
  plugins: [],
};
export default config;
