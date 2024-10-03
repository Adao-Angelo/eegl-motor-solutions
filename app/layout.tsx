import { Montserrat } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body
        style={{
          backgroundImage: "url(/background.png)",
        }}
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
