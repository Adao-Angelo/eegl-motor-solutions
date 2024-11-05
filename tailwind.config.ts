import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-170%)",
          },
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
        "c-red-3": "#C00000",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
