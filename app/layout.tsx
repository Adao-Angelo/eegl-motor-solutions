import { Montserrat } from "next/font/google";

import "./globals.css";
import MobileWarning from "@/components/ui/MobileWarning";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});
export const metadata = {
  icons: {
    icon: "/eeg.png",
  },
};

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
          backgroundRepeat: "no-repeat",
        }}
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
