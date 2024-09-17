import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-170%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      backgroundImage: {
        "gradient-red": "linear-gradient(to right, #C00000, #930000)",
        "gradient-red-2": "linear-gradient(to right, #BA0000, #730000)",
        "gradient-red-3": "linear-gradient(to right, #BA0000, #540000)",
        "gradient-gray": "linear-gradient(to bottom, #FFFFFF, #D9D9D9)",
        "member-office": "url('/member-office.png')",
        "background-project": "url('/background.png')",
        footerImage: "url('/footerImage.png')",
        footerImageComercio: "url('/footerComerciosEServicos.png')",
        solucoesFuturo: "url('/solucoesParaFuturoAgricola.png')",
        
      },
      colors: {
        "c-stand": "#BA0000",
        "c-text": "#333333",
        "c-background": "#FFFFFF",
        "c-black": "#1E1E1E",
        "c-gray-0": "#D9D9D9",
        "c-gray-2": "#333333",
        "c-gray-3": "#929292",
        "c-dark-red": "#5E0000",
        "c-green-0": "#2C4026",
        "c-green-2": "#8DCE78",
        "c-red-2": "#A50404",
        "c-red-3": "#C00000"
      },
    },
  },
  plugins: [],
};
export default config;
