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
        "gradient-red": "linear-gradient(to right, #C00000, #930000)",
      },
      colors: {
        cd: "#BA0000",
        ct: "#333333",
        cb: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
