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
        "gradient-red-2": "linear-gradient(to right, #BA0000, #730000)",
        "member-office": "url('/member-office.png')",
        "background-project": "url('/background.png')",
        footerImage: "url('/footerImage.png')",
      },
      colors: {
        "c-stand": "#BA0000",
        "c-text": "#333333",
        "c-background": "#FFFFFF",
        "c-black": "#1E1E1E",
        "c-gray-0": "#D9D9D0",
        "c-gray-2": "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
