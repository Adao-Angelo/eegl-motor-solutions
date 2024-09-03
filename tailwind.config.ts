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
        footerImage: "url('/footerImage.png')",
      },
      colors: {
        cd: "#BA0000",
        ct: "#333333",
        cb: "#FFFFFF",
        "c-black": "#1E1E1E",
        cg: "#D9D9D0",
      },
    },
  },
  plugins: [],
};
export default config;
